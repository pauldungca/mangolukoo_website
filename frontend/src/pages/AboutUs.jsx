import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50/30 to-white">
      {/* Hero Section - Responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-orange-100 text-orange-600 rounded-full text-xs sm:text-sm font-semibold">
            🥭 About Mango Lukoo
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-4 sm:mt-5 md:mt-6 px-2">
            Crafted with Real Mango,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-1">
              Made for Everyday Refreshment
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5 md:mt-6 leading-relaxed px-4">
            Mango Lukoo is dedicated to serving high-quality mango shakes and
            milk teas made from real fruit, balanced flavors, and consistent
            preparation.
          </p>
        </motion.div>
      </div>

      {/* Story Section - Responsive */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Mango Lukoo started with a simple idea — to create mango-based
              drinks that highlight real fruit flavor without overpowering
              sweetness.
            </p>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Every drink is carefully crafted to deliver freshness, balance,
              and satisfaction, making Mango Lukoo a go-to destination for
              mango lovers.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-100 rounded-2xl sm:rounded-3xl blur-3xl opacity-50" />
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl bg-orange-100 flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="public/images/mangolk.jpg" 
                alt="Mango Lukoo Store"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission / Vision - Responsive */}
      <div className="bg-gradient-to-br from-orange-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {[
            {
              title: "Our Mission",
              text:
                "To provide refreshing mango drinks made with real ingredients while maintaining quality, consistency, and affordability.",
            },
            {
              title: "Our Vision",
              text:
                "To become a trusted and recognized mango drink brand known for flavor, quality, and customer satisfaction.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Values - Responsive */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 px-4">
              Our values guide every drink we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              "Real Mango Ingredients",
              "Consistent Quality",
              "Customer Satisfaction",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600">
                  {value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Responsive */}
      <div className="py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 px-2">
            Experience the Taste of Real Mango
          </h2>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              View Our Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}