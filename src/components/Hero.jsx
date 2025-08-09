import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
            Mahadev Traders
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            Trusted suppliers of <span className="font-semibold text-slate-900 dark:text-white">Cement</span> and <span className="font-semibold text-slate-900 dark:text-white">TMT Iron Rods</span>. Quality materials for every build.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg shadow hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
            >
              Browse Products
            </Link>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-slate-800 dark:border-slate-300 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right: Info Card */}
        <div className="w-full md:w-[340px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center">
          {/* Optional: Company Logo or Illustration */}
          <div className="mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-inner">
            {/* Replace with <img src="..." alt="Logo" /> if you have a logo */}
            <span className="text-3xl text-slate-700 dark:text-slate-200 font-bold">MT</span>
          </div>
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-2">Quick Info</h3>
          <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <li>✅ Fast local delivery</li>
            <li>✅ Wholesale & retail</li>
            <li>✅ Quality-tested materials</li>
          </ul>
        </div>
      </div>
    </section>
  );
}