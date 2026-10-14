// src/components/tours/TourCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/lib/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-brand-yellow/50 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60">
      
      {/* Imagen Principal */}
      <div className="relative h-56 w-full overflow-hidden bg-neutral-800">
        <Image
          src={tour.mainImage}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge de Dificultad */}
        <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-brand-yellow text-xs font-bold px-3 py-1 rounded-full border border-neutral-700">
          🥾 {tour.difficulty}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>⏱️ {tour.duration}</span>
            <span>•</span>
            <span className="truncate">📍 {tour.departureLocation.split(",")[0]}</span>
          </div>

          <h3 className="font-bold text-lg text-white group-hover:text-brand-yellow transition-colors line-clamp-2">
            {tour.title}
          </h3>

          <p className="text-neutral-400 text-sm line-clamp-2">
            {tour.description}
          </p>
        </div>

        {/* Precio y Botón */}
        <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-neutral-400 uppercase font-semibold block">Desde</span>
            <span className="text-2xl font-black text-brand-yellow">
              ${tour.price.toFixed(2)}
            </span>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="px-4 py-2 rounded-xl bg-brand-yellow text-brand-black font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            Ver Tour
          </Link>
        </div>
      </div>
    </article>
  );
}