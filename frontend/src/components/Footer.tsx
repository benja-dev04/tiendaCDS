import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModel from "./ContactModel";

const categories = [
  { label: "Rock", to: "/rock" },
  { label: "Jazz", to: "/jazz" },
  { label: "Electrónica", to: "/electronica" },
  { label: "Ofertas", to: "/ofertas" },
];

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="border-t border-[var(--grey)]/20 bg-[var(--vinyl-black)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        <div>
          <Link
            to="/"
            className="font-display text-2xl tracking-widest text-[var(--paper)]"
          >
            SUR<span className="text-[var(--amber)]">CO</span>
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-[var(--grey)]">
            Discos elegidos con la misma paciencia con la que se escuchan.
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[var(--amber)]">
            Categorías
          </p>
          <ul className="flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c.label}>
                <Link
                  to={c.to}
                  className="text-xs text-[var(--grey)] hover:text-[var(--paper)]"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[var(--amber)]">
            Información
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/#envios-info"
                className="text-xs text-[var(--grey)] hover:text-[var(--paper)]"
              >
                Envíos
              </Link>
            </li>
            <li>
              <Link
                to="/#devoluciones-info"
                className="text-xs text-[var(--grey)] hover:text-[var(--paper)]"
              >
                Devoluciones
              </Link>
            </li>
            <li>
              {/* Este ya no es un Link a página, sino un botón que abre el modal */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-xs text-[var(--grey)] hover:text-[var(--paper)]"
              >
                Contáctanos
              </button>
            </li>
            <li>
              <Link
                to="/nosotros"
                className="text-xs text-[var(--grey)] hover:text-[var(--paper)]"
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--grey)]/10 px-6 py-4 text-center font-mono text-[10px] uppercase tracking-widest text-[var(--grey)]">
        © {new Date().getFullYear()} Surco — hecho para portafolio
      </div>

      <ContactModel
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </footer>
  );
}
