import { useState } from "react";
import { useCart } from "../CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const hasSizes = Array.isArray(product.sizes) && product.sizes.length > 1;
  const [selectedSize, setSelectedSize] = useState(
    hasSizes
      ? product.sizes[0]
      : { size: null, price: product.price || product.sizes?.[0]?.price || 0 }
  );

  const handleSizeChange = (e) => {
    const size = product.sizes.find((s) => s.size === e.target.value);
    setSelectedSize(size);
  };

  const handleAdd = () => {
    addToCart({ ...product, selectedSize }, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4 sm:p-6 w-full max-w-xs mx-auto">
      <div className="h-72 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain rounded-xl"
        />
      </div>

      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
        {product.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {product.description}
      </p>

      {hasSizes && (
        <select
          value={selectedSize.size}
          onChange={handleSizeChange}
          className="mb-3 px-3 py-2 border rounded-lg text-slate-800 dark:text-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {product.sizes.map((s, idx) => (
            <option key={idx} value={s.size}>
              {s.size}
            </option>
          ))}
        </select>
      )}

      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-xl font-extrabold text-green-700 dark:text-green-400">
            ₹{hasSizes ? selectedSize.price : product.price}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Stock: {product.stock}
          </div>
        </div>
        <button
           onClick={handleAdd}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 text-white rounded-lg font-semibold shadow transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
