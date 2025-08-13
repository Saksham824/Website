import { useCart } from "../CartContext";
import { ShoppingCart } from "lucide-react"; 
import product1 from '../assets/product1.jpg'

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <>
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4 sm:p-6 w-full max-w-xs mx-auto">
      {/* Image Placeholder */}
      <div className="h-36 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-4">
        <img src={product1} alt={product.name} className="h-full rounded-xl w-full" /> 
        {/* <ShoppingCart className="w-12 h-12 text-slate-400 dark:text-slate-500" /> */}
      </div>
      {/* Product Info */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-xl font-extrabold text-green-700 dark:text-green-400">₹{product.price}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Stock: {product.stock}</div>
        </div>
        <button
          onClick={() => addToCart(product, 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 text-white rounded-lg font-semibold shadow transition"
        >
          Add
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4 sm:p-6 w-full max-w-xs mx-auto">
      {/* Image Placeholder */}
      <div className="h-36 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-4">
        <img src={product1} alt={product.name} className="h-full rounded-xl w-full" /> 
        {/* <ShoppingCart className="w-12 h-12 text-slate-400 dark:text-slate-500" /> */}
      </div>
      {/* Product Info */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-xl font-extrabold text-green-700 dark:text-green-400">₹{product.price}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Stock: {product.stock}</div>
        </div>
        <button
          onClick={() => addToCart(product, 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 text-white rounded-lg font-semibold shadow transition"
        >
          Add
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4 sm:p-6 w-full max-w-xs mx-auto">
      {/* Image Placeholder */}
      <div className="h-36 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-4">
        <img src={product1} alt={product.name} className="h-full rounded-xl w-full" /> 
        {/* <ShoppingCart className="w-12 h-12 text-slate-400 dark:text-slate-500" /> */}
      </div>
      {/* Product Info */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-xl font-extrabold text-green-700 dark:text-green-400">₹{product.price}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Stock: {product.stock}</div>
        </div>
        <button
          onClick={() => addToCart(product, 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 text-white rounded-lg font-semibold shadow transition"
        >
          Add
        </button>
      </div>
    </div>
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col p-4 sm:p-6 w-full max-w-xs mx-auto">
      {/* Image Placeholder */}
      <div className="h-36 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl mb-4">
        <img src={product1} alt={product.name} className="h-full rounded-xl w-full" /> 
        {/* <ShoppingCart className="w-12 h-12 text-slate-400 dark:text-slate-500" /> */}
      </div>
      {/* Product Info */}
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description}</p>
      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <div className="text-xl font-extrabold text-green-700 dark:text-green-400">₹{product.price}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Stock: {product.stock}</div>
        </div>
        <button
          onClick={() => addToCart(product, 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400 text-white rounded-lg font-semibold shadow transition"
        >
          Add
        </button>
      </div>
    </div>
    </>
  );
}