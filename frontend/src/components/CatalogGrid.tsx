import { records } from "../data/records";
import RecordCard from "./RecordCard";

export default function CatalogGrid() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between border-b border-[var(--grey)]/20 pb-4">
        <h2 className="font-display text-3xl tracking-wide text-[var(--paper)]">
          CATÁLOGO
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--grey)]">
          {records.length} referencias
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
    </section>
  );
}
