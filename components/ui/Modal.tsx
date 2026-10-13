// src/components/ui/Modal.tsx
"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 relative text-white shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <h3 className="text-lg font-bold text-brand-yellow">{title || "Modal"}</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-white text-lg">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}