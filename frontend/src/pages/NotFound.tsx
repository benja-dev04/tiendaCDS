import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Disco no encontrado");
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8 h-32 w-32">
        <div className="absolute h-full w-full animate-spin rounded-full [animation-duration:6s]" style={{
          background: "radial-gradient(circle, #2b2a28 0%, #0c0b0a 55%, #0c0b0a 100%)",
        }}>
          <div className="absolute inset-0 m-auto h-1/3 w-1/3 rounded-full bg-[var(--amber)]" />
        </div>
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
        Error 404
      </p>
      <h1 className="mt-2 font-display text-5xl tracking-wide text-[var(--paper)] md:text-6xl">
        SE RAYÓ EL DISCO
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--grey)]">
        La página que buscas no existe o se movió de lugar. Vuelve al
        catálogo y sigue buscando tu próximo disco.
        <br></br>
        <br></br>
        O también el disco nunca existio O.o
      </p>

      <Link
        to="/"
        className="mt-8 inline-block border border-[var(--paper)] px-8 py-3 font-mono text-xs uppercase tracking-widest text-[var(--paper)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--vinyl-black)]"
      >
        Volver al inicio
      </Link>
    </section>
  );
}