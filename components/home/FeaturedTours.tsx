// src/components/home/FeaturedTours.tsx
import { getAllTours } from "@/lib/tours";
import TourCard from "@/components/tours/TourCard";
import Link from "next/link";

export default async function FeaturedTours() {
  const tours = await getAllTours();

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Próximas <span className="text-brand-yellow">Salidas</span>
            </h2>
            <p className="text-neutral-400 mt-2 text-base">
              Asegura tu lugar en nuestras rutas más populares de este mes.
            </p>
          </div>
          <Link
            href="/tours"
            className="mt-4 md:mt-0 text-brand-yellow hover:underline font-bold text-sm inline-flex items-center gap-1"
          >
            Ver todos los destinos &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}