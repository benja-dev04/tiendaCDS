import { useParams, useNavigate, Link } from "react-router-dom";
import { records, formatCLP } from "../data/records";
import { useCart } from "../context/CartContext";
import { usePageTitle } from "../hooks/usePageTitle";

export default function ProductDetail() {
  usePageTitle("Detalle");  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const record = records.find((r) => r.id === id);

  if (!record) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
          404
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-wide text-[var(--paper)]">
          No encontramos ese disco
        </h1>
        <Link
          to="/"
          className="mt-6 inline-block border border-[var(--paper)] px-6 py-2 font-mono text-xs uppercase tracking-widest text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--vinyl-black)]"
        >
          Volver al catálogo
        </Link>
      </section>
    );
  }

  const discount =
    record.compareAtPrice &&
    Math.round((1 - record.price / record.compareAtPrice) * 100);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-[var(--grey)] hover:text-[var(--paper)]"
      >
        ← Volver al catálogo
      </button>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src={record.cover}
            alt={`Portada de ${record.title}`}
            className="h-full w-full object-cover"
          />
          {discount ? (
            <span className="absolute left-3 top-3 bg-[var(--wine)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--paper)]">
              -{discount}% OFF
            </span>
          ) : null}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
            {record.catalogNumber} · {record.genre}
            {record.year ? ` · ${record.year}` : ""}
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-[var(--paper)] md:text-5xl">
            {record.title}
          </h1>
          <p className="mt-1 text-sm text-[var(--grey)]">{record.artist}</p>
          {record.label ? (
            <p className="mt-1 text-xs text-[var(--grey)]">
              Sello: {record.label}
            </p>
          ) : null}

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-mono text-2xl text-[var(--paper)]">
              {formatCLP(record.price)}
            </span>
            {record.compareAtPrice ? (
              <span className="font-mono text-sm text-[var(--grey)] line-through">
                {formatCLP(record.compareAtPrice)}
              </span>
            ) : null}
          </div>

          <button
            onClick={() => addToCart(record)}
            className="mt-6 w-full bg-[var(--amber)] py-3 font-mono text-xs uppercase tracking-widest text-[var(--vinyl-black)] transition-opacity hover:opacity-90 md:w-auto md:px-10"
          >
            Añadir al carrito
          </button>

          {record.description ? (
            <p className="mt-8 text-sm leading-relaxed text-[var(--grey)]">
              {record.description}
            </p>
          ) : null}

          {record.tracklist && record.tracklist.length > 0 ? (
            <div className="mt-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
                Tracklist
              </p>
              <ol className="flex flex-col gap-2">
                {record.tracklist.map((track, index) => (
                  <li
                    key={index}
                    className="flex gap-3 border-b border-[var(--grey)]/10 pb-2 text-sm text-[var(--paper)]"
                  >
                    <span className="font-mono text-[var(--grey)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {track}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}