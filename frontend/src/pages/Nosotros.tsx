import { usePageTitle } from "../hooks/usePageTitle";




const stats = [
  { value: "12", label: "Años preservando vinilos" },
  { value: "3.400+", label: "Discos restaurados" },
  { value: "28", label: "Sellos independientes" },
];

const timeline = [
  {
    year: "2013",
    title: "El primer crate",
    text: "Empezamos comprando colecciones familiares que nadie más quería rescatar, solo por no dejarlas perderse.",
  },
  {
    year: "2017",
    title: "Primer local físico",
    text: "Dejamos las ferias itinerantes y abrimos una vitrina fija donde la gente pudiera escuchar antes de llevarse un disco.",
  },
  {
    year: "Hoy",
    title: "Un catálogo curado",
    text: "Cada referencia pasa por revisión, limpieza y control de calidad antes de llegar a la tienda.",
  },
];

export default function Nosotros() {
  usePageTitle("La familia");
  return (
    <div>
      {/* Hero de la página */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
            Nuestra historia
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-[var(--paper)] md:text-6xl">
            PRESERVAR
            <br />
            EL SURCO
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--grey)]">
            Surco nació de una obsesión simple: el vinilo suena distinto, y
            esa diferencia vale la pena cuidarla. Rescatamos ediciones que
            corrían riesgo de desaparecer del formato físico, y las
            devolvemos a circulación tal como estaban pensadas para sonar.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/discos.jpg"
            alt="Interior de la tienda Surco"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div className="absolute -bottom-5 -left-5 rounded-lg border border-[var(--grey)]/20 bg-[var(--vinyl-black)] px-5 py-3 shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--amber)]">
              Desde
            </p>
            <p className="font-display text-xl tracking-wide text-[var(--paper)]">
              2013
            </p>
          </div>
        </div>
      </section>

      {/* Franja de estadísticas */}
      <section className="border-y border-[var(--grey)]/20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[var(--grey)]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="font-display text-4xl tracking-wide text-[var(--amber)]">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--grey)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
          Cómo llegamos aquí
        </p>
        <h2 className="font-display text-3xl tracking-wide text-[var(--paper)]">
          EL CAMINO
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-xl border border-[var(--grey)]/20 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--wine)]">
                {item.year}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-[var(--paper)]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--grey)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofía / cuidado del formato */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl bg-[var(--wine)]/10 p-8 md:p-10">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
            Nuestra filosofía
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--grey)]">
            No creemos en la nostalgia por la nostalgia. Creemos en preservar
            un formato que, escuchado como corresponde, sigue siendo
            insuperable. Cada disco que pasa por nuestras manos es revisado,
            limpiado y guardado respetando su estado original — porque esa es
            la idea detrás de cada venta: que el vinilo llegue a tus manos
            exactamente como estaba pensado que sonara.
          </p>
        </div>
      </section>

      {/* Ubicación */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
          Visítanos
        </p>
        <h2 className="font-display text-3xl tracking-wide text-[var(--paper)]">
          DÓNDE ENCONTRARNOS
        </h2>
        <p className="mt-3 max-w-md text-sm text-[var(--grey)]">
          Edificio Dos Caracoles, Av. Providencia 2216, Providencia —
          Santiago.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-[var(--grey)]/20">
          <iframe
            title="Ubicación de Surco en Dos Caracoles, Providencia"
            src="https://www.google.com/maps?q=Edificio+Dos+Caracoles,+Av.+Providencia+2216,+Providencia,+Santiago&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
