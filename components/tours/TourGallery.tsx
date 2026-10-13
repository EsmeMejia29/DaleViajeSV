// src/components/tours/TourGallery.tsx
import Image from "next/image";

interface TourGalleryProps {
  images?: string[];
}

export default function TourGallery({ images = [] }: TourGalleryProps) {
  const displayImages = images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    "https://images.unsplash.com/photo-1511497584788-87676104235f?q=80&w=600",
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-white">Galería de Fotos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {displayImages.map((src, idx) => (
          <div key={idx} className="relative h-36 md:h-44 rounded-xl overflow-hidden border border-neutral-800">
            <Image src={src} alt={`Foto tour ${idx + 1}`} fill className="object-cover hover:scale-105 transition duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}