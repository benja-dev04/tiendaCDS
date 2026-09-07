import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const links = [
  { label: "Nuevos", to: "/" },
  { label: "Rock", to: "/rock" },
  { label: "Jazz", to: "/jazz" },
  { label: "Electrónica", to: "/electronica" },
  { label: "Ofertas", to: "/ofertas" },
  { label: "Nosotros", to: "/nosotros" },
];

export default function Navbar() {
  const { totalCount, toggleCart } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--grey)]/20 bg-[var(--vinyl-black)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" onClick={closeMenu} className="font-display text-3xl tracking-widest text-[var(--paper)]">
          SUR<span className="text-[var(--amber)]">CO</span>
        </Link>

        {/* Links de escritorio: visibles desde md hacia arriba */}
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.label}
                to={link.to}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--grey)] transition-colors hover:text-[var(--paper)]"
                style={isActive ? { color: "var(--paper)" } : undefined}
              >
                {isActive && (
                  <span
                    className="h-6 w-6 flex-shrink-0 animate-spin rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, var(--amber) 25%, #0c0b0a 26%, #0c0b0a 60%, var(--grey) 61%)",
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--paper)]"
            aria-label="Abrir carrito"
          >
            Carrito
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--amber)] text-[11px] font-bold text-[var(--vinyl-black)]">
              {totalCount}
            </span>
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <span
              className="h-[2px] w-6 bg-[var(--paper)] transition-transform"
              style={
                isMenuOpen
                  ? { transform: "translateY(6px) rotate(45deg)" }
                  : undefined
              }
            />
            <span
              className="h-[2px] w-6 bg-[var(--paper)] transition-opacity"
              style={isMenuOpen ? { opacity: 0 } : undefined}
            />
            <span
              className="h-[2px] w-6 bg-[var(--paper)] transition-transform"
              style={
                isMenuOpen
                  ? { transform: "translateY(-6px) rotate(-45deg)" }
                  : undefined
              }
            />
          </button>
        </div>
      </div>

      {/* Panel del menú mobile: solo aparece cuando isMenuOpen es true, y solo bajo md */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[var(--grey)]/20 px-6 py-4 md:hidden">
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="flex items-center gap-3 py-3 font-mono text-sm uppercase tracking-widest text-[var(--grey)]"
                style={isActive ? { color: "var(--paper)" } : undefined}
              >
                {isActive && (
                  <span
                    className="h-6 w-6   flex-shrink-0 animate-spin rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, var(--amber) 25%, #0c0b0a 26%, #0c0b0a 60%, var(--grey) 61%)",
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
