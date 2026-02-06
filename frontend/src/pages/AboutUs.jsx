import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50/30 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
            🥭 About Mango Lukoo
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6">
            Crafted with Real Mango,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Made for Everyday Refreshment
            </span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Mango Lukoo is dedicated to serving high-quality mango shakes and
            milk teas made from real fruit, balanced flavors, and consistent
            preparation.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Mango Lukoo started with a simple idea — to create mango-based
              drinks that highlight real fruit flavor without overpowering
              sweetness.
            </p>
            <p className="text-gray-600 leading-relaxed">
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
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-100 rounded-3xl blur-3xl opacity-50" />
            <div className="relative h-96 rounded-3xl bg-orange-100 flex items-center justify-center shadow-xl">
              <img
                src="public/images/mangolk.jpg" 
                alt="Mango Lukoo Store"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-10">
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
              className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Values */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Our values guide every drink we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Real Mango Ingredients",
              "Consistent Quality",
              "Customer Satisfaction",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                animate={{ y: [20, -10, 20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="bg-orange-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-orange-600">
                  {value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience the Taste of Real Mango
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View Our Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
