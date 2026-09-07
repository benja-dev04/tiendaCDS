interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Tarjeta centrada */}
      <div
        className={`fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-xl border border-[var(--grey)]/20 bg-[var(--vinyl-black)] p-8 shadow-2xl transition-all duration-300 ${
          isOpen
            ? "-translate-y-1/2 opacity-100"
            : "pointer-events-none -translate-y-[45%] opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-5 top-5 text-[var(--grey)] hover:text-[var(--paper)]"
        >
          ✕
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
          Contáctanos
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-wide text-[var(--paper)]">
          HABLEMOS DE MÚSICA
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[var(--grey)]">
          Somos un equipo pequeño que cree en el vinilo como algo que merece
          ser cuidado. Si buscas un disco en especial, tienes dudas sobre un
          pedido, o simplemente quieres conversar de música, escríbenos —
          respondemos siempre nosotros mismos.
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-[var(--grey)]/20 pt-6">
          <a
            href="mailto:hola@surco.cl"
            className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--paper)] hover:text-[var(--amber)]"
          >
            Email
            <span>hola@surco.cl</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--paper)] hover:text-[var(--amber)]"
          >
            Instagram
            <span>@surco.vinilos</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--paper)] hover:text-[var(--amber)]"
          >
            TikTok
            <span>@surco.vinilos</span>
          </a>
        </div>
      </div>
    </>
  );
}