import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { VinylRecord, CartItem } from "../types";

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (record: VinylRecord) => void;
  removeFromCart: (recordId: string) => void;
  updateQuantity: (recordId: string, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

  function addToCart(record: VinylRecord) {
    setItems((prev) => {
      const existing = prev.find((item) => item.record.id === record.id);
      if (existing) {
        return prev.map((item) =>
          item.record.id === record.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { record, quantity: 1 }];
    });
    setIsOpen(true);
  }

  function removeFromCart(recordId: string) {
    setItems((prev) => prev.filter((item) => item.record.id !== recordId));
  }

  function updateQuantity(recordId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(recordId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.record.id === recordId ? { ...item, quantity } : item
      )
    );
  }

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.record.price * item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}
