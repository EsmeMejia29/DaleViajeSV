"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#121212] border-b border-neutral-800 px-6 py-6 space-y-4">
      <Link href="/" onClick={onClose} className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow">
        Inicio
      </Link>
      <Link href="/tours" onClick={onClose} className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow">
        Tours y Destinos
      </Link>
      <Link href="/contacto" onClick={onClose} className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow">
        Contacto
      </Link>
      <Link href="/carrito" onClick={onClose} className="block text-base font-semibold text-brand-yellow">
        🛒 Ver Reserva
      </Link>
    </div>
  );
}