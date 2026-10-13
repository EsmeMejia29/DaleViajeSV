// src/components/ui/Badge.tsx
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "dark" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "yellow", className = "" }: BadgeProps) {
  const styles = {
    yellow: "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30",
    dark: "bg-neutral-900 text-neutral-300 border border-neutral-850",
    outline: "bg-transparent text-neutral-400 border border-neutral-700",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}