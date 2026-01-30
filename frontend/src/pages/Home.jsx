import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Add your 5 product images here
  const images = [
    "images/products/Product1.png",
    "images/products/Product2.png",
    "images/products/Product3.png",
    "images/products/Product4.png",
    "images/products/Product5.png",
  ];

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-50/30 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-800">Mango</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500">
                Lukoo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-700 text-lg leading-relaxed max-w-xl"
            >
              Fresh mango-based shakes and milk teas crafted for everyday
              refreshment. Real fruit flavor, balanced sweetness, and consistent
              quality in every cup.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                About Us
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-96 h-96 bg-gradient-to-br from-orange-300 to-orange-100 rounded-full blur-3xl opacity-50"
              />
            </div>

            {/* Carousel Container */}
            <div className="relative z-10 h-[500px] flex items-center justify-center overflow-hidden">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: index === currentImage ? 1 : 0,
                    x:
                      index === currentImage
                        ? 0
                        : index ===
                            (currentImage - 1 + images.length) % images.length
                          ? "-100%"
                          : "100%",
                    scale: index === currentImage ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute"
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentImage
                      ? "w-8 h-3 bg-gradient-to-r from-orange-500 to-orange-600"
                      : "w-3 h-3 bg-gray-300 hover:bg-orange-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-bold text-gray-800"
            >
              Our Branches
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Visit MangoLukoo at our conveniently located branches and enjoy
              freshly made mango shakes and milk teas, crafted daily with real
              fruit ingredients and consistent quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full border-2 border-transparent hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                View All Branches
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Items Section */}
      <div className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl font-bold text-gray-800"
            >
              Best Sellers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 text-lg"
            >
              Customer favorites made with real mangoes and carefully balanced
              flavors.
            </motion.p>
          </motion.div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "images/products/Product1.png",
                title: "Classic Mango Shake",
                desc: "Pure mango flavor blended smooth for a refreshing finish.",
                delay: 0,
              },
              {
                img: "images/products/Product2.png",
                title: "Mango Milk Tea",
                desc: "Creamy milk tea infused with ripe mango sweetness.",
                delay: 0.2,
              },
              {
                img: "images/products/Product3.png",
                title: "Mango Graham Shake",
                desc: "Rich mango shake layered with crushed graham goodness.",
                delay: 0.4,
              },
              {
                img: "images/products/Product4.png",
                title: "Mango Cream Delight",
                desc: "Smooth, creamy mango drink with a dessert-like finish.",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20 }}
                animate={{ y: [20, -10, 20] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* View All Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
          >
            View All Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
