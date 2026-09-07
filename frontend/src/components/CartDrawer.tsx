import { useCart } from "../context/CartContext";
import { formatCLP } from "../data/records";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeFromCart, totalPrice } =
    useCart();

  return (
    <>
      {/* Fondo oscuro al abrir el carrito */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel lateral */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-[var(--vinyl-black)] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--grey)]/20 px-6 py-5">
          <h2 className="font-display text-2xl tracking-wide text-[var(--paper)]">
            TU CARRITO
          </h2>
          <button
            onClick={toggleCart}
            aria-label="Cerrar carrito"
            className="text-[var(--grey)] hover:text-[var(--paper)]"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-8 text-center font-mono text-xs uppercase tracking-widest text-[var(--grey)]">
              Tu carrito está vacío
            </p>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.record.id} className="flex gap-4">
                  <img
                    src={item.record.cover}
                    alt={item.record.title}
                    className="h-20 w-20 flex-shrink-0 object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium text-[var(--paper)]">
                        {item.record.title}
                      </p>
                      <p className="font-mono text-xs text-[var(--grey)]">
                        {formatCLP(item.record.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.record.id, item.quantity - 1)
                        }
                        className="h-6 w-6 border border-[var(--grey)]/40 font-mono text-xs text-[var(--paper)]"
                        aria-label="Reducir cantidad"
                      >
                        -
                      </button>
                      <span className="font-mono text-xs text-[var(--paper)]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.record.id, item.quantity + 1)
                        }
                        className="h-6 w-6 border border-[var(--grey)]/40 font-mono text-xs text-[var(--paper)]"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.record.id)}
                        className="ml-auto font-mono text-[10px] uppercase tracking-widest text-[var(--wine)] underline"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--grey)]/20 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--grey)]">
                Total
              </span>
              <span className="font-mono text-lg text-[var(--paper)]">
                {formatCLP(totalPrice)}
              </span>
            </div>
            <button className="w-full bg-[var(--amber)] py-3 font-mono text-xs uppercase tracking-widest text-[var(--vinyl-black)] transition-opacity hover:opacity-90">
              Ir a pagar
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
