import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <section className="flex justify-center items-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 text-center backdrop-blur-md">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mb-3 animate-fade-in-down">
            Our Best Quality Products
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore premium <span className="font-semibold text-slate-900 dark:text-white">Cement</span> and <span className="font-semibold text-slate-900 dark:text-white">Iron Rods</span> at the best prices.
          </p>
        </div>
      </section>
    </div>
  );
}