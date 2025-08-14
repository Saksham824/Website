import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wide">Mahadev Traders</h2>
            <p className="text-sm text-gray-400">
              Trusted suppliers of Cement & Iron Rods
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
             to="/" className="hover:text-green-300 transition-colors">Home</Link
            >
            <Link
             to="/products" className="hover:text-green-300 transition-colors">Products</Link
            >
            <Link
             to="/about" className="hover:text-green-300 transition-colors">About</Link
            >
            <Link
             to="/contact" className="hover:text-green-300 transition-colors">Contact</Link
            >
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link to="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mahadev Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
