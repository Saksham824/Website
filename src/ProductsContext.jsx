import { createContext, useContext, useEffect, useState } from "react";

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