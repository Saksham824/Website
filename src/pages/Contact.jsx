export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white mb-2">
            Contact{" "}
            <span className="text-green-600 dark:text-green-400">
              Mahadev Traders
            </span>
          </h2>
          <div className="mx-auto h-1 w-16 bg-green-500 rounded-full mb-2" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reach out for quotes, product inquiries, or partnership opportunities. We’re here to help you build better!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Info Card */}
          <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-semibold text-green-700 dark:text-green-400">Address:</span>
                <br />
                Near Main Market, Your City, State, 123456
              </li>
              <li>
                <span className="font-semibold text-green-700 dark:text-green-400">Phone:</span>
                <br />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <span className="font-semibold text-green-700 dark:text-green-400">Email:</span>
                <br />
                <a href="mailto:mahadevtraders@example.com" className="hover:underline">
                  mahadevtraders@example.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-green-700 dark:text-green-400">Hours:</span>
                <br />
                Mon–Sat: 8:00am – 7:00pm
              </li>
            </ul>

            {/* Google Maps Embed */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107421.567896483!2d74.77756255343162!3d32.714647255783525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84bf169d3525%3A0xf233488eeb8fd8d!2sJammu!5e0!3m2!1sen!2sin!4v1754756690059!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 space-y-5">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              Send Us a Message
            </h3>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send Message
            </button>
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              We respect your privacy. Your information will not be shared.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
