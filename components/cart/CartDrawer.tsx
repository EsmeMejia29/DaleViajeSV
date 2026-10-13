// src/components/cart/CartDrawer.tsx
"use client";

import CartItem from "./CartItem";
import Button from "../ui/Button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-neutral-950 border-l border-neutral-800 h-full flex flex-col p-6 animate-slideLeft">
        {/* Cabecera */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <h3 className="text-lg font-bold text-white">Tu Carrito de Viajes</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-white text-lg">✕</button>
        </div>

        {/* Lista de items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          <CartItem onRemove={() => {}} />
        </div>

        {/* Total y Checkout */}
        <div className="pt-4 border-t border-neutral-800 space-y-4">
          <div className="flex justify-between text-base font-bold">
            <span className="text-neutral-400">Total</span>
            <span className="text-brand-yellow text-xl">$70.00</span>
          </div>

          <Button className="w-full" size="lg" onClick={() => (window.location.href = "/checkout")}>
            Proceder al Pago
          </Button>
        </div>
      </div>
    </div>
  );
}