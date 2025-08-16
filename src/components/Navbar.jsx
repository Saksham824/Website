import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { useState } from "react";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="backdrop-blur bg-white/70 dark:bg-slate-800/80 shadow-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-yellow-500 text-black grid place-items-center font-extrabold">MT</div>
          <span className="text-yellow-400 font-extrabold tracking-wide text-xl">Mahadev Traders</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-green-500 focus:text-green-600 transition-colors duration-200 font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-green-500 focus:text-green-600 transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-bounce shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden text-center transition-all duration-300 ${
          menuOpen
            ? "max-h-[400px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <nav className="flex flex-col bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl shadow-lg mx-2 mt-1 py-3 px-4 space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-green-500 focus:text-green-600 transition-colors duration-200 font-medium py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cart"
            className="relative flex items-center justify-center hover:text-green-500 focus:text-green-600 transition-colors duration-200 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            onClick={() => setMenuOpen(false)}
          >
            <ShoppingCartIcon className="h-6 w-6 mr-1" />
            Cart
            {cart.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-bounce shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}