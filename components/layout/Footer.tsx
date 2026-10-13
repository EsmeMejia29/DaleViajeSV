// src/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Info y Logo */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-yellow">
              <Image src="/images/logo-daleviaje.png" alt="DaleViajeSV" fill className="object-cover" />
            </div>
            <span className="text-lg font-black text-white">
              DaleViaje<span className="text-brand-yellow">SV</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Aventuras, senderismo y experiencias inolvidables por los rincones más increíbles de El Salvador.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Explora
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tours" className="hover:text-brand-yellow transition-colors">
                Todos los Tours
              </Link>
            </li>
            <li>
              <Link href="/tours?cat=volcanes" className="hover:text-brand-yellow transition-colors">
                Volcanes y Montañas
              </Link>
            </li>
            <li>
              <Link href="/tours?cat=cascadas" className="hover:text-brand-yellow transition-colors">
                Cascadas y Ríos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Atención al Viajero
          </h4>
          <ul className="space-y-2 text-sm">
            <li>🇸🇻 San Salvador, El Salvador</li>
            <li>💬 WhatsApp: +503 0000-0000</li>
            <li>✉️ reservas@daleviajesv.com</li>
          </ul>
        </div>

        {/* Confianza */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Seguridad & Pago
          </h4>
          <p className="text-xs text-neutral-400 mb-3">
            Tours con guías locales certificados, transporte seguro y cupos limitados por experiencia.
          </p>
          <div className="flex gap-2">
            <span className="text-xs bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
              💳 Tarjeta
            </span>
            <span className="text-xs bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
              📲 Transferencia
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-neutral-900 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} DaleViajeSV. Todos los derechos reservados.
      </div>
    </footer>
  );
}