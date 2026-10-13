// src/components/cart/CartItem.tsx
import Image from "next/image";

interface CartItemProps {
  title?: string;
  date?: string;
  people?: number;
  price?: number;
  imageUrl?: string;
  onRemove?: () => void;
}

export default function CartItem({
  title = "Volcán de Santa Ana",
  date = "24 Oct 2026",
  people = 2,
  price = 35.0,
  imageUrl = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400",
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-800">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-bold text-white line-clamp-1">{title}</h4>
          <button onClick={onRemove} className="text-neutral-500 hover:text-red-400 text-xs ml-2">
            Eliminar
          </button>
        </div>

        <div className="text-xs text-neutral-400 space-y-0.5">
          <p>📅 {date}</p>
          <p>👥 {people} personas</p>
        </div>

        <div className="text-right">
          <span className="text-sm font-bold text-brand-yellow">
            ${(price * people).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}