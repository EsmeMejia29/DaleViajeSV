// src/components/home/WhyChooseUs.tsx
export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🧭",
      title: "Guías Certificados",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Exploradores capacitados en primeros auxilios y senderismo.",
    },
    {
      icon: "🚐",
      title: "Transporte Seguro",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unidades cómodas y puntos de encuentro estratégicos.",
    },
    {
      icon: "👥",
      title: "Grupos Reducidos",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Máximo 15 a 20 aventureros por grupo para mejor atención.",
    },
  ];

  return (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            ¿Por qué viajar con <span className="text-brand-yellow">DaleViajeSV</span>?
          </h2>
          <p className="text-neutral-400 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Experiencias diseñadas para disfrutar cada destino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 hover:border-brand-yellow/40 transition">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}