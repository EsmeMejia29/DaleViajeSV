// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center gap-4">
      {/* Círculo de carga con los colores de DaleViajeSV */}
      <div className="w-12 h-12 rounded-full border-4 border-neutral-800 border-t-amber-400 animate-spin" />
      
      <p className="text-amber-400 text-sm font-semibold tracking-wide">
        Cargando DaleViajeSV...
      </p>
    </div>
  );
}