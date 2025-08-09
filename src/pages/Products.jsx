import { useState } from "react";
import { useProducts } from "../ProductsContext";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { products } = useProducts();
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('All');

  const cats = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const filtered = products.filter(
    p =>
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            Products
          </h2>
          <div className="mx-auto h-1 w-16 bg-green-500 rounded-full mb-2" />
          <p className="text-gray-600 dark:text-gray-300">
            Browse our premium selection of Cement and Iron Rods.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center mb-8">
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            {cats.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map(p => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-12">
              No products found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}