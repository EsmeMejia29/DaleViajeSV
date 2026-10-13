// src/components/tours/TourFilters.tsx
"use client";

import { useState } from "react";

const CATEGORIES = ["Todos", "Volcanes", "Cascadas", "Playas", "Camping"];

export default function TourFilters() {
  const [active, setActive] = useState("Todos");

  return (
    <div className="flex flex-wrap gap-2 py-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition ${
            active === cat
              ? "bg-brand-yellow text-brand-black"
              : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}