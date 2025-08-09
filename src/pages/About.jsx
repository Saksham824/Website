export default function About() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            About <span className="text-green-600 dark:text-green-400">Mahadev Traders</span>
          </h2>
          <div className="mx-auto h-1 w-16 bg-green-500 rounded-full mb-2" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Family-owned and trusted for over a decade, Mahadev Traders is your reliable partner for quality cement and TMT iron rods in the region.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 sm:p-10 mb-10">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            To empower builders and homeowners by providing top-grade construction materials at honest prices, with a focus on timely delivery and customer satisfaction.
          </p>
          <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Our Values</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Integrity in every transaction</li>
            <li>Commitment to quality and safety</li>
            <li>Building long-term relationships</li>
            <li>Supporting local communities</li>
          </ul>
        </div>

        {/* Timeline / History */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Our Journey</h3>
          <ol className="relative border-l border-green-400 dark:border-green-600 pl-6 space-y-6">
            <li>
              <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              <span className="font-semibold text-green-700 dark:text-green-400">2010:</span> Mahadev Traders founded as a family business.
            </li>
            <li>
              <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              <span className="font-semibold text-green-700 dark:text-green-400">2015:</span> Expanded product range to include TMT iron rods.
            </li>
            <li>
              <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              <span className="font-semibold text-green-700 dark:text-green-400">2020:</span> Recognized for fastest local delivery and customer service.
            </li>
            <li>
              <span className="absolute -left-3 top-1.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              <span className="font-semibold text-green-700 dark:text-green-400">Today:</span> Serving hundreds of satisfied customers and growing!
            </li>
          </ol>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Contact Us for a Quote
          </a>
        </div>
      </div>
    </section>
  );
}