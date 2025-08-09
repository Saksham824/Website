import { createContext, useContext, useEffect, useState } from "react";

const sampleProducts = [
  { id: 'p1', name: 'OPC Cement 53 Grade (50kg)', category: 'Cement', price: 420, stock: 120, description: 'High-strength OPC cement for construction.' },
  { id: 'p2', name: 'TMT Iron Rod 8mm', category: 'Iron Rods', price: 1500, stock: 200, description: 'Thermo-Mechanically Treated (TMT) rods for reinforced concrete.' },
  { id: 'p3', name: 'PPC Cement (50kg)', category: 'Cement', price: 380, stock: 80, description: 'Portland Pozzolana Cement suitable for general use.' },
];

const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    try {
      const raw = localStorage.getItem('mahadev_products');
      return raw ? JSON.parse(raw) : sampleProducts;
    } catch (e) { return sampleProducts; }
  });

  useEffect(() => {
    localStorage.setItem('mahadev_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (p) => setProducts(prev => [{ ...p, id: `p${Date.now()}` }, ...prev]);
  const updateProduct = (id, patch) => setProducts(prev => prev.map(x => x.id === id ? { ...x, ...patch } : x));
  const deleteProduct = (id) => setProducts(prev => prev.filter(x => x.id !== id));

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}
export function useProducts(){ return useContext(ProductsContext); }