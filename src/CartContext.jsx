import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("mahadev_cart")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("mahadev_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      // Unique key for product with size
      const key = `${product.id || product.name}-${product.selectedSize?.size || ""}`;
      const found = prev.find((p) => p.key === key);

      if (found) {
        return prev.map((p) =>
          p.key === key ? { ...p, qty: p.qty + qty } : p
        );
      }

      return [
        {
          key,
          id: product.id || product.name,
          name: product.name,
          size: product.selectedSize?.size || null,
          price:
            product.selectedSize?.price ??
            product.price ??
            product.sizes?.[0]?.price ??
            0,
          qty,
          image: product.image,
        },
        ...prev,
      ];
    });
  };

  const updateQty = (key, qty) =>
    setCart((prev) =>
      prev.map((p) => (p.key === key ? { ...p, qty } : p))
    );

  const removeFromCart = (key) =>
    setCart((prev) => prev.filter((p) => p.key !== key));

  const clear = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeFromCart, clear, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
