import { Link } from "react-router-dom";
import type { VinylRecord } from "../types";
import { formatCLP } from "../data/records";
import { useCart } from "../context/CartContext";

export default function RecordCard({ record }: { record: VinylRecord }) {
  const { addToCart } = useCart();
  const discount =
    record.compareAtPrice &&
    Math.round((1 - record.price / record.compareAtPrice) * 100);

  return (
    <div className="group flex flex-col">
      <Link to={`/producto/${record.id}`} className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[85%] w-[85%] translate-x-0 rounded-full bg-[radial-gradient(circle,#2b2a28_0%,#0c0b0a_55%,#0c0b0a_100%)] transition-transform duration-500 ease-out group-hover:translate-x-10 group-hover:animate-[spin_3s_linear_infinite]">
            <div className="absolute inset-0 m-auto h-1/3 w-1/3 rounded-full bg-[var(--amber)]" />
          </div>
        </div>

        <img
          src={record.cover}
          alt={`Portada de ${record.title}`}
          className="relative z-10 h-full w-full object-cover"
        />

        {discount ? (
          <span className="absolute left-2 top-2 z-20 bg-[var(--wine)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--paper)]">
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
}
