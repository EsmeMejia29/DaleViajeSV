// src/components/home/Testimonials.tsx
export default function Testimonials() {
  const reviews = [
    {
      name: "Carlos Mendoza",
      tour: "Volcán de Santa Ana",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Increíble experiencia y la logística fue puntual.",
      rating: 5,
    },
    {
      name: "Andrea Solís",
      tour: "Cascadas de Tamanique",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excelente ambiente con los guías y las pozas espectaculares.",
      rating: 5,
    },
    {
      name: "Rodrigo Gómez",
      tour: "Ruta de Las Flores",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Todo muy bien organizado y seguro para viajar con amigos.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Historias de <span className="text-brand-yellow">Aventureros</span>
          </h2>
          <p className="text-neutral-400 mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="text-brand-yellow mb-3">{"★".repeat(r.rating)}</div>
                <p className="text-neutral-300 text-sm italic leading-relaxed mb-4">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>
              <div className="border-t border-neutral-800 pt-3">
                <span className="block text-sm font-bold text-white">{r.name}</span>
                <span className="text-xs text-neutral-400">{r.tour}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}