import ProductCard from "../components/ProductCard";
import list1 from "../assets/list1.jpg";
import list2 from "../assets/list2.jpg";
import cement1 from "../assets/cement1.jpg";
import cement2 from "../assets/cement2.jpeg";
import { useProducts } from "../ProductsContext";
import { useState } from "react";

export default function Products() {
  const productss = [
    {
      name: "Steel Rod",
      description: "High-strength TMT steel rod for construction purposes.",
      image: list1,
      sizes: [
        { size: "8mm", price: 371 },
        { size: "10mm", price: 564 },
        { size: "12mm", price: 795 },
        { size: "16mm", price: 1415 },
        { size: "20mm", price: 2213 },
        { size: "25mm", price: 3449 },
      ],
      stock: 100,
    },
    {
      name: "Steel Sheet",
      description: "Durable and corrosion-resistant steel sheet for industrial use.",
      image: list2,
      sizes: [
        { size: "8mm", price: 371 },
        { size: "10mm", price: 564 },
        { size: "12mm", price: 795 },
        { size: "16mm", price: 1415 },
        { size: "20mm", price: 2213 },
        { size: "25mm", price: 3449 },
      ],
      stock: 50,
    },
    {
      name: "Ultra Tech",
      description: " UltraTech Cement is a highly recognizable and widely used brand in India. ",
      image: cement1,
      price: 430,
      stock: 50,
    },
    {
      name: "Ambuja Cement",
      description: "Ambuja is a significant player in the Indian cement market and has been recognized as India's Most Trusted Cement Brand. ",
      image: cement2,
      price: 460,
      stock: 50,
    },
  ];

  const { products } = useProducts();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const cats = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
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
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
            className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            {cats.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {productss.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
