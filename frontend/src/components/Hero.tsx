export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
          Catálogo SRC-001 — SRC-008
        </p>
        <h1 className="font-display text-6xl leading-[0.9] tracking-wide text-[var(--paper)] md:text-7xl">
          EL SURCO
          <br />
          NUNCA MIENTE
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-[var(--grey)]">
          Prensajes limitados, ediciones importadas y joyas olvidadas.
          Vinilos curados a mano para quienes todavía creen en el ritual
          de bajar la aguja.
        </p>
        <a
          href="#catalogo"
          className="mt-8 inline-block border border-[var(--paper)] px-8 py-3 font-mono text-xs uppercase tracking-widest text-[var(--paper)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--vinyl-black)]"
        >
          Explorar catálogo
        </a>
      </div>

      <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
        <div className="absolute h-full w-full -rotate-6 rounded-md bg-[var(--wine)]" />
        <div className="absolute h-full w-full rotate-3 rounded-md bg-[var(--grey)]/20" />
        <div className="relative flex h-[85%] w-[85%] items-center justify-center rounded-full bg-[radial-gradient(circle,#2b2a28_0%,#0c0b0a_55%,#0c0b0a_100%)] shadow-2xl">
          <div className="h-1/4 w-1/4 rounded-full bg-[var(--amber)]" />
        </div>
      </div>
    </section>
  );
}
