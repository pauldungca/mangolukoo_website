import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Shake",
    "Soda",
    "Milk Tea",
    "Coffee",
    "Fruit Tea",
  ];

  const menuItems = [
    // Shakes
    {
      id: 1,
      name: "Classic Mango Shake",
      category: "Shake",
      image: "images/products/Product1.png",
    },
    {
      id: 2,
      name: "Mango Graham Shake",
      category: "Shake",
      image: "images/products/Product3.png",
    },
    {
      id: 3,
      name: "Mango Cream Shake",
      category: "Shake",
      image: "images/products/Product4.png",
    },
    {
      id: 4,
      name: "Mango Oreo Shake",
      category: "Shake",
      image: "images/products/Product5.png",
    },

    // Sodas
    {
      id: 5,
      name: "Mango Soda Float",
      category: "Soda",
      image: "images/products/Product1.png",
    },
    {
      id: 6,
      name: "Lemon Mango Soda",
      category: "Soda",
      image: "images/products/Product2.png",
    },
    {
      id: 7,
      name: "Berry Mango Soda",
      category: "Soda",
      image: "images/products/Product3.png",
    },

    // Milk Tea
    {
      id: 8,
      name: "Mango Milk Tea",
      category: "Milk Tea",
      image: "images/products/Product2.png",
    },
    {
      id: 9,
      name: "Mango Taro Milk Tea",
      category: "Milk Tea",
      image: "images/products/Product4.png",
    },
    {
      id: 10,
      name: "Mango Wintermelon",
      category: "Milk Tea",
      image: "images/products/Product5.png",
    },
    {
      id: 11,
      name: "Mango Matcha Milk Tea",
      category: "Milk Tea",
      image: "images/products/Product1.png",
    },

    // Coffee
    {
      id: 12,
      name: "Mango Coffee Frappe",
      category: "Coffee",
      image: "images/products/Product3.png",
    },
    {
      id: 13,
      name: "Mango Caramel Latte",
      category: "Coffee",
      image: "images/products/Product2.png",
    },
    {
      id: 14,
      name: "Mango Mocha",
      category: "Coffee",
      image: "images/products/Product4.png",
    },

    // Fruit Tea
    {
      id: 15,
      name: "Mango Passion Fruit Tea",
      category: "Fruit Tea",
      image: "images/products/Product5.png",
    },
    {
      id: 16,
      name: "Mango Peach Tea",
      category: "Fruit Tea",
      image: "images/products/Product1.png",
    },
    {
      id: 17,
      name: "Mango Lychee Tea",
      category: "Fruit Tea",
      image: "images/products/Product2.png",
    },
    {
      id: 18,
      name: "Mango Strawberry Tea",
      category: "Fruit Tea",
      image: "images/products/Product3.png",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-orange-100 max-w-2xl mx-auto"
          >
            Discover our signature mango-based drinks crafted with real fruit
            and premium ingredients
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md py-6">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="container mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-80">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name Label */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-orange-600">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-xl">
              No items found in this category
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
