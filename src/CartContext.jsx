import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export default function CartProvider({ children }){
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mahadev_cart')) || []; } catch(e){ return []; }
  });
  useEffect(()=>{ localStorage.setItem('mahadev_cart', JSON.stringify(cart)); }, [cart]);

  const addToCart = (product, qty=1) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if(found) return prev.map(p => p.id===product.id ? { ...p, qty: p.qty + qty } : p);
      return [{ id: product.id, name: product.name, price: product.price, qty }, ...prev];
    });
  };
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id===id ? { ...p, qty } : p));
  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id!==id));
  const clear = () => setCart([]);

  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);

  return <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clear, total }}>{children}</CartContext.Provider>;
}
export function useCart(){ return useContext(CartContext); }