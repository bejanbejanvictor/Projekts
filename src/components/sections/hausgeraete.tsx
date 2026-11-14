export default function HausgeraeteSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          <div>
            <div className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              Siemens Fachhändler
            </div>

            <h2 className="mt-6 text-5xl font-black">
              Hausgeräte &
              Fachberatung
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Als autorisierter Siemens Fachhändler bieten wir
              hochwertige Hausgeräte, persönliche Beratung
              sowie professionelle Lieferung und Montage.
            </p>

            <ul className="mt-8 space-y-4 text-lg">
              <li>✓ Siemens Extraklasse Produkte</li>
              <li>✓ Bosch Hausgeräte</li>
              <li>✓ Constructa Geräte</li>
              <li>✓ Persönliche Beratung</li>
              <li>✓ Lieferung und Anschluss</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-700 p-12 text-white shadow-xl">
            <h3 className="text-3xl font-black mb-6">
              Lieferung & Anschluss
            </h3>

            <p className="text-lg leading-8">
              Wenn Sie ein Gerät bei uns kaufen,
              liefern wir es direkt zu Ihnen nach Hause,
              schließen es fachgerecht an
              und erklären Ihnen die Bedienung.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}