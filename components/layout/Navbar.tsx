// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo DaleViajeSV */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow bg-neutral-900 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo-daleviaje.png"
              alt="DaleViajeSV Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-black tracking-tight text-white group-hover:text-brand-yellow transition-colors">
            DaleViaje<span className="text-brand-yellow">SV</span>
          </span>
        </Link>

        {/* Links Escritorio */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-300">
          <Link href="/" className="hover:text-brand-yellow transition-colors">
            Inicio
          </Link>
          <Link href="/tours" className="hover:text-brand-yellow transition-colors">
            Destinos y Tours
          </Link>
          <Link href="/contacto" className="hover:text-brand-yellow transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Acciones */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/carrito"
            className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-brand-yellow hover:border-brand-yellow transition-colors relative"
            aria-label="Ver carrito"
          >
            🛒
            <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <Link
            href="/tours"
            className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-black font-bold text-sm hover:bg-amber-400 transition-all transform hover:-translate-y-0.5 shadow-md shadow-brand-yellow/10"
          >
            Explorar Tours
          </Link>
        </div>

        {/* Botón Móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-brand-yellow p-2"
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-neutral-800 px-6 py-5 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow"
          >
            Inicio
          </Link>
          <Link
            href="/tours"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow"
          >
            Destinos y Tours
          </Link>
          <Link
            href="/contacto"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base font-semibold text-neutral-200 hover:text-brand-yellow"
          >
            Contacto
          </Link>
          <Link
            href="/carrito"
            onClick={() => setIsMenuOpen(false)}
            className="block text-base font-semibold text-brand-yellow"
          >
            🛒 Ver mi reserva
          </Link>
        </div>
      )}
    </header>
  );
}