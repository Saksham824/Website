import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import captian_tmt from "../assets/captain_tmt.jpg";
import super_next from "../assets/super_next.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const brandData = [
  {
    name: "Captain TMT",
    img: captian_tmt,
    description:
      "Captain Steel India Limited is one of the leading producers of quality TMT bars in India. We manufacture the most trusted steel products like- TMT Bar, TMT Ring, Rust Guard & more. We began our journey in 2007, by establishing our first manufacturing plant in Kalyaneshwari, West Bengal.The same year, this facility began producing TMT bars using Thermex technology from Germany.Captain TMT bars are known for superior strength, durability, and resistance to corrosion. Ideal for residential and commercial projects.",
  },
  {
    name: "Super NextTMT Wire",
    img: super_next,
    description:
      "Super Next TMT Wire 22G is produced using high-quality raw materials, processed in advanced furnaces to achieve the desired gauge and properties. Rigorous quality control tests ensure the wire meets industry standards for tensile strength and flexibility. Once approved, it is carefully packaged and labeled for efficient distribution. Continuous customer feedback drives improvements in production, ensuring Super Next TMT Wire 22G consistently delivers reliability and excellence to meet client needs.",
  },
];

export default function Hero() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section className="relative bg-slate-900 text-white min-h-screen overflow-x-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/your-steel-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-stretch gap-10 md:gap-14 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10 w-full"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Mahadev Traders
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl">
            Trusted suppliers of{" "}
            <span className="font-bold text-yellow-400">Cement</span> and{" "}
            <span className="font-bold text-yellow-400">TMT Iron Rods</span>.
            Delivering quality for every build.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition duration-200"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg transition duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Brand Logos */}
          <div className="mt-12">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Brands</h2>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {brandData.map((brand, i) => (
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  key={i}
                  onClick={() => setSelectedBrand(brand)}
                  className="bg-slate-800 p-3 sm:p-4 rounded-xl shadow-lg w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center cursor-pointer"
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="object-contain max-h-20 sm:max-h-28 w-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md lg:w-[340px] bg-white text-black rounded-2xl shadow-xl p-6 sm:p-8 z-10 self-start mt-8 lg:mt-0"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center text-2xl sm:text-3xl font-bold">
            MT
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">
            About Us
          </h3>
          <p className="text-sm text-gray-700 mb-4 text-center">
            Mahadev Traders is your reliable partner for high-quality cement and
            TMT iron rods. With years of experience, we ensure timely delivery
            and customer satisfaction for every project.
          </p>
          <ul className="text-sm space-y-1 mb-6 text-gray-800">
            <li>✅ Fast local delivery</li>
            <li>✅ Wholesale & retail</li>
            <li>✅ Quality-tested materials</li>
          </ul>
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-2 bg-yellow-500 text-black rounded-lg shadow hover:bg-yellow-400 transition duration-200 font-semibold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Videos Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 z-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left">
          See Us in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[video1, video2, video3, video4].map((src, i) => (
            <motion.video
              key={i}
              src={src}
              controls
              muted
              autoPlay
              whileHover={{ scale: 1.03 }}
              className="rounded-xl w-full aspect-video shadow-lg border border-gray-200 bg-black"
            ></motion.video>
          ))}
        </div>
      </div>

      {/* Sticky Quote Button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg z-50"
      >
        Get a Quote
      </Link>

      {/* Modal for Brand Details */}
      <AnimatePresence>
        {selectedBrand && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative text-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                onClick={() => setSelectedBrand(null)}
              >
                ✖
              </button>
              <img
                src={selectedBrand.img}
                alt={selectedBrand.name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-3">
                {selectedBrand.name}
              </h3>
              <p className="text-gray-700 text-center">
                {selectedBrand.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
