// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#121212] flex flex-col items-center justify-center text-center px-4">
      <span className="text-6xl mb-4">🧭</span>
      <h1 className="text-4xl font-black text-amber-400 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">
        ¡Ruta no encontrada!
      </h2>
      <p className="text-neutral-400 max-w-md mb-8">
        Parece que te desviaste del sendero. La página o tour que buscas no existe o cambió de lugar.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-amber-400 text-neutral-950 font-bold text-sm hover:bg-amber-300 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}