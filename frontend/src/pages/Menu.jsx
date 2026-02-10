import { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Shake",
    "Soda",
    "Milk Tea",
    "Coffee",
    "Fruit Tea",
    "Yogurt",
  ];

  const menuItems = [
    // Shakes
    {
      id: 1,
      name: "Mango Mix Overload",
      category: "Shake",
      image: "images/products/shake/mangomix.png",
    },
    {
      id: 2,
      name: "Mango Graham",
      category: "Shake",
      image: "images/products/shake/graham.png",
    },
    {
      id: 3,
      name: "Mango Oreo",
      category: "Shake",
      image: "images/products/shake/oreo.png",
    },
    {
      id: 4,
      name: "Mango Strawberry Puroo",
      category: "Shake",
      image: "images/products/shake/strawberry.png",
    },

    // Sodas
    {
      id: 5,
      name: "Blueberry Soda",
      category: "Soda",
      image: "images/products/soda/blueberry.png",
    },
    {
      id: 6,
      name: "Passion Fruit Soda",
      category: "Soda",
      image: "images/products/soda/passion_fruit.png",
    },
    {
      id: 7,
      name: "Peach Soda",
      category: "Soda",
      image: "images/products/soda/peach.png",
    },
        {
      id: 8,
      name: "Kiwi Soda",
      category: "Soda",
      image: "images/products/soda/kiwi.png",
    },
// Fruit Tea
    {
      id: 9,
      name: "Kiwi Fruit Tea",
      category: "Fruit Tea",
      image: "images/products/fruittea/ftkiwi.png",
    },
    {
      id: 10,
      name: "Passion Fruit Tea",
      category: "Fruit Tea",
      image: "images/products/fruittea/passionfruit.png",
    },
    {
      id: 11,
      name: "Blueberry Tea",
      category: "Fruit Tea",
      image: "images/products/fruittea/blueberry.png",
    },
    {
      id: 12,
      name: "Peach Tea",
      category: "Fruit Tea",
      image: "images/products/fruittea/peach.png",
    },
    // Coffee
    {
      id: 20,
      name: "Matcha Coffee",
      category: "Coffee",
      image: "images/products/coffee/matcha.png",
    },
    {
      id: 21,
      name: "Salted Caramel Coffee",
      category: "Coffee",
      image: "images/products/coffee/salted_caramel.png",
    },
    {
      id: 22,
      name: "Latte",
      category: "Coffee",
      image: "images/products/coffee/latte.png",
    },
    {
      id: 23,
      name: "Americano",
      category: "Coffee",
      image: "images/products/coffee/americano.png",
    },
    // Milk Tea
    {
      id: 13,
      name: "Taro Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/taro.png",
    },
    {
      id: 14,
      name: "Okinawa Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/okinawa.png",
    },
    {
      id: 15,
      name: "Cookies & Cream Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/cookies_cream.png",
    },
    {
      id: 16,
      name: "Hokkaido Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/hokkaido.png",
    },
        {
      id: 17,
      name: "Red Velvet Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/red_velvet.png",
    },
          {
      id: 18,
      name: "Salted Caramel Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/salted.png",
    },
        {
      id: 19,
      name: "Java Chip Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/javachip.png",
    },
    {
      id: 20,
      name: "Dark Choco Milk Tea",
      category: "Milk Tea",
      image: "images/products/milktea/javachip.png",
    },


    //Yogurt
     {
      id: 24,
      name: "Green Apple Yogurt",
      category: "Yogurt",
      image: "images/products/yogurt/greenapple.png",
    },
     {
      id: 25,
      name: "Strawberry Yogurt",
      category: "Yogurt",
      image: "images/products/yogurt/strawberry.png",
    }, {
      id: 26,
      name: "Lemon Yogurt",
      category: "Yogurt",
      image: "images/products/yogurt/lemon.png",
    },
     {
      id: 27,
      name: "Lychee Yogurt",
      category: "Yogurt",
      image: "images/products/yogurt/lychee.png",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Menu Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                bounce: 0.5,
              }}
              className="inline-block"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Our Menu
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our signature mango-based drinks crafted with real fruit
              and premium ingredients
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="font-semibold">100% Real Mango</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Made Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="font-semibold">18+ Flavors</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(255 247 237)"
            />
          </svg>
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

      {/* Bottom CTA Section */}
     <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Can't decide? Try our Customer Favorites!
          </h2>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Visit any of our branches and let our staff help you choose the
            perfect drink for your taste
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/branches'}
            className="px-10 py-4 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Find a Branch
          </motion.button>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
