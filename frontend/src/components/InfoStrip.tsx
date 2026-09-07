interface InfoItem {
  step: string;
  label: string;
  title: string;
  description: string;
  anchorId: string;
}

const items: InfoItem[] = [
  {
    step: "01",
    label: "Retiro",
    title: "Retiro en tienda",
    description:
      "Haz tu compra online y retira en nuestra tienda en Av. Providencia 2216, Edificio Dos Caracoles.",
    anchorId: "retiro-info",
  },
  {
    step: "02",
    label: "Despacho",
    title: "Envíos",
    description:
      "Si compras antes de las 14:00, lo enviamos el mismo día. Realizamos envíos todos los días.",
    anchorId: "envios-info",
  },
  {
    step: "03",
    label: "Pago",
    title: "Medios de pago",
    description:
      "Puedes elegir entre Webpay o transferencia electrónica. Si quieres pagar con PayPal, contáctanos.",
    anchorId: "pago-info",
  },
  {
    step: "04",
    label: "Cambios",
    title: "Devoluciones",
    description:
      "Tienes 10 días desde la recepción para solicitar un cambio si el disco llega con algún defecto.",
    anchorId: "devoluciones-info",
  },
];

export default function InfoStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.step}
            id={item.anchorId}
            className="scroll-mt-24 rounded-xl border border-[var(--grey)]/20 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
              {item.step} / {item.label}
            </p>
            <h3 className="mt-2 text-sm font-semibold text-[var(--paper)]">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--grey)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}