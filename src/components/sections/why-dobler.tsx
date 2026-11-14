export default function WhyDobler() {
  const items = [
    {
      value: "80+",
      title: "Jahre Erfahrung",
      color: "text-blue-900",
    },
    {
      value: "3.",
      title: "Generation Familienbetrieb",
      color: "text-yellow-500",
    },
    {
      value: "SIEMENS",
      title: "Autorisierter Fachhändler",
      color: "text-blue-900",
    },
    {
      value: "VDE",
      title: "Prüfung & Wartung",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Warum Elektro Dobler?
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            Seit Jahrzehnten vertrauen Privatkunden,
            Gewerbebetriebe und Unternehmen auf unsere
            Erfahrung, Zuverlässigkeit und persönliche Beratung.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-10 text-center shadow-sm border"
            >
              <div className={`text-5xl font-black ${item.color}`}>
                {item.value}
              </div>

              <div className="mt-5 text-lg font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}