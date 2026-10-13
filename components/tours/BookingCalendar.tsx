// src/components/tours/BookingCalendar.tsx
"use client";

import { useState } from "react";
import { TourDate } from "@/data/mockTours";

interface BookingCalendarProps {
  tourId: string;
  tourPrice: number;
  availableDates: TourDate[];
}

export default function BookingCalendar({
  tourPrice,
  availableDates,
}: BookingCalendarProps) {
  const [selectedDateId, setSelectedDateId] = useState<string>(
    availableDates[0]?.id || ""
  );
  const [travelersCount, setTravelersCount] = useState<number>(1);

  const selectedDate = availableDates.find((d) => d.id === selectedDateId);
  const maxSlots = selectedDate ? selectedDate.availableSlots : 1;
  const totalPrice = tourPrice * travelersCount;

  const handleBooking = () => {
    alert(
      `¡Reserva lista!\nFecha: ${selectedDate?.date}\nPersonas: ${travelersCount}\nTotal: $${totalPrice.toFixed(2)}`
    );
  };

  return (
    <div className="space-y-5">
      {/* Selector de Fecha */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
          1. Elige tu fecha de viaje
        </label>
        <div className="space-y-2">
          {availableDates.map((item) => {
            const isSelected = item.id === selectedDateId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedDateId(item.id);
                  if (travelersCount > item.availableSlots) {
                    setTravelersCount(item.availableSlots);
                  }
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition ${
                  isSelected
                    ? "bg-brand-yellow/10 border-brand-yellow text-white"
                    : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                <span className="font-semibold text-sm">📅 {item.date}</span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-md font-bold ${
                    isSelected
                      ? "bg-brand-yellow text-brand-black"
                      : "bg-neutral-800 text-neutral-300"
                  }`}
                >
                  {item.availableSlots} cupos libres
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selector de Cantidad de Personas */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
          2. Número de personas
        </label>
        <div className="flex items-center justify-between bg-neutral-900 p-2 rounded-xl border border-neutral-800">
          <button
            type="button"
            disabled={travelersCount <= 1}
            onClick={() => setTravelersCount((prev) => Math.max(1, prev - 1))}
            className="w-10 h-10 rounded-lg bg-neutral-800 text-white font-bold hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            -
          </button>
          <span className="font-bold text-lg text-white">
            {travelersCount} {travelersCount === 1 ? "persona" : "personas"}
          </span>
          <button
            type="button"
            disabled={travelersCount >= maxSlots}
            onClick={() => setTravelersCount((prev) => Math.min(maxSlots, prev + 1))}
            className="w-10 h-10 rounded-lg bg-neutral-800 text-white font-bold hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Resumen Total y Botón */}
      <div className="pt-4 border-t border-neutral-800 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-neutral-400">Total a pagar:</span>
          <span className="text-2xl font-black text-brand-yellow">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleBooking}
          className="w-full py-4 px-6 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-base hover:bg-amber-400 transition-all shadow-lg shadow-brand-yellow/10"
        >
          Apartar mis cupos
        </button>
      </div>
    </div>
  );
}