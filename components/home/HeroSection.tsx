// src/components/home/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 lg:py-28 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Texto Hero */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider">
            🇸🇻 Explora El Salvador sin complicaciones
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Descubre nuevos senderos con{" "}
            <span className="text-brand-yellow underline decoration-brand-yellow/40">
              DaleViajeSV
            </span>
          </h1>

          <p className="text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0">
            Tours guiados a volcanes, cascadas secretas y playas de ensueño. Cupos limitados para que disfrutes al máximo cada aventura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/tours"
              className="px-8 py-4 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-base hover:bg-amber-400 transition transform hover:-translate-y-0.5 shadow-xl shadow-brand-yellow/10"
            >
              Ver próximos tours
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-base hover:bg-neutral-800 transition"
            >
              Preguntas frecuentes
            </Link>
          </div>
        </div>

        {/* Mascota / Logo Destacado */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-3xl bg-neutral-900/60 p-6 border-2 border-brand-yellow/30 shadow-2xl flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/images/logo-daleviaje.png"
                alt="DaleViajeSV Aventura"
                fill
                className="object-contain drop-shadow-[0_10px_20px_rgba(253,184,19,0.2)]"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}