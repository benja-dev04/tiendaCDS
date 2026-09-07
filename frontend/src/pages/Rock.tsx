import { records, formatCLP } from "../data/records";
import {useCart } from "../context/CartContext"; 
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Rock() {
  usePageTitle("Rock");
  const { addToCart } = useCart();
  const rockRecords = records.filter((r) => r.genre === "Rock");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
        Género
      </p>
      <h1 className="font-display text-5xl tracking-wide text-[var(--paper)]">
        ROCK
      </h1>
      <p className="mt-3 max-w-md text-sm text-[var(--grey)]">
        Guitarras crudas y actitud, directo al vinilo.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {rockRecords.map((record) => {
          const discount =
            record.compareAtPrice &&
            Math.round((1 - record.price / record.compareAtPrice) * 100);

          return (
            <div key={record.id} className="flex flex-col">
              <Link to={`/producto/${record.id}`} className="relative aspect-square overflow-hidden">
                <img
                  src={record.cover}
                  alt={`Portada de ${record.title}`}
                  className="h-full w-full object-cover"
                />
                {discount ? (
                  <span className="absolute left-2 top-2 bg-[var(--wine)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--paper)]">
                    -{discount}% OFF
                  </span>
                ) : null}
              </Link>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-[var(--amber)]">
                {record.catalogNumber} · {record.genre}
              </p>
              <Link to={`/producto/${record.id}`}>
                <h3 className="mt-1 text-sm font-medium text-[var(--paper)] hover:text-[var(--amber)]">
                  {record.title}
                </h3>
              </Link>
              <p className="text-xs text-[var(--grey)]">{record.artist}</p>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-sm text-[var(--paper)]">
                    {formatCLP(record.price)}
                  </span>
                  {record.compareAtPrice ? (
                    <span className="font-mono text-xs text-[var(--grey)] line-through">
                      {formatCLP(record.compareAtPrice)}
                    </span>
                  ) : null}
                </div>
                <button
                  onClick={() => addToCart(record)}
                  className="font-mono text-[10px] uppercase tracking-widest text-[var(--paper)] underline decoration-[var(--amber)] underline-offset-4 hover:text-[var(--amber)]"
                >
                  Añadir
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {rockRecords.length === 0 && (
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-[var(--grey)]">
          No hay discos de este género por ahora.
        </p>
      )}
    </section>
  );
}