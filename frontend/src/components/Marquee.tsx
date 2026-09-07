const messages = [
  "MILES DE VINILOS EN TIENDA",
  "EDICIONES EUROPEAS",
  "EDICIONES NORTEAMERICANAS",
  "EDICIONES JAPONESAS",
  "HARD TO FIND",
  "PRENSAJES GARANTIZADOS",
];

export default function Marquee() {
  // Se duplica la lista para que el loop sea perfecto y no se note el corte
  const loopItems = [...messages, ...messages];

  return (
    <div className="overflow-hidden">
      <div className="-skew-y-0 bg-[var(--amber)] py-4">
        <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-3 whitespace-nowrap">
          {loopItems.map((text, index) => (
            <span
              key={index}
              className="flex items-center gap-3 font-display text-xl tracking-wide text-[var(--vinyl-black)]"
            >
              {text}
              <span className="text-base">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
