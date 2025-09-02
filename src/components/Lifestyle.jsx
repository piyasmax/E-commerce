import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";

// Import images
import lifestyle1 from "../assets/img/lifestyle1.webp";
import lifestyle2 from "../assets/img/life2.jpg";
import lifestyle3 from "../assets/img/lifestyle1.webp";

const Lifestyle = ({ setCurrentPage, setCurrentCategory }) => {
  const navigate = useNavigate();
  const lifestyleImages = [lifestyle1, lifestyle2, lifestyle3];

  const [showBubbles, setShowBubbles] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubbles(false), 2500); // bubbles last 2.5s
    return () => clearTimeout(timer);
  }, []);

  // Fashion categories
  const categories = [
    {
      id: "tshirts",
      name: "T-Shirts",
      emoji: "👕",
      description: "Trendy and comfy cotton tees",
      color: "from-pink-500 to-red-500",
      products: "120+ Styles",
      popular: "Oversized Tees",
    },
    {
      id: "shirts",
      name: "Shirts",
      emoji: "👔",
      description: "Formal & casual shirts for all occasions",
      color: "from-blue-500 to-indigo-500",
      products: "90+ Styles",
      popular: "Linen Shirts",
    },
    {
      id: "jeans",
      name: "Jeans",
      emoji: "👖",
      description: "Durable and stylish denim wear",
      color: "from-indigo-500 to-purple-500",
      products: "150+ Styles",
      popular: "Slim Fit Jeans",
    },
    {
      id: "footwear",
      name: "Footwear",
      emoji: "👟",
      description: "Trendy sneakers, sandals & more",
      color: "from-green-500 to-teal-500",
      products: "200+ Styles",
      popular: "White Sneakers",
    },
  ];

  // Handle category selection
  const handleCategoryClick = (categoryId) => {
    setCurrentCategory(categoryId);
    // setCurrentPage("products");
    navigate("/products");
  };

  // Trending teaser click
  const showTrendingProducts = () => {
    alert("🔥 Trending fashion feature coming soon!");
  };

  // Random bubbles generator
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 60) + 25, // size 20-80px
    left: Math.random() * 100, // random x pos
    delay: Math.random() * 1.5, // stagger
  }));

  return (
    <div className="relative bg-gray-50 min-h-screen overflow-hidden">
      {/* Bubble Animation Overlay */}
      <AnimatePresence>
        {showBubbles && (
          <motion.div
            key="bubbles"
            className="fixed inset-0 bg-gradient-to-r from-pink-500 to-red-500 z-50 flex items-center justify-center text-white text-3xl font-bold overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating Bubbles */}
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: "-20vh", opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: bubble.delay,
                  ease: "easeOut",
                }}
                className="absolute rounded-full bg-white/40 backdrop-blur-sm"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  left: `${bubble.left}%`,
                }}
              />
            ))}

            {/* Center Text */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute text-white drop-shadow-lg"
            >
              👗 Lifestyle Fashion
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Only show after bubbles */}
      {!showBubbles && (
        <>
          {/* Header */}
          <div className="py-5 mb-2 mt-2">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold font-serif mb-4 text-indigo-700 drop-shadow-sm"
              >
                👗 Lifestyle Fashion
              </motion.h1>
              <p className="text-sm text-gray-600 opacity-80 mb-6">
                Discover trendy outfits & fashion essentials
              </p>
              <div className="h-1 w-24 bg-pink-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Hero Carousel */}
          <ImageCarousel images={lifestyleImages} />

          {/* Categories */}
          <div className="max-w-7xl mx-auto px-4 pb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-serif">
                Shop by Category
              </h2>
              <p className="text-gray-600 text-sm opacity-80">
                Find your perfect lifestyle fit
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleCategoryClick(category.id)}
                  className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer group relative"
                >
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                      {category.emoji}
                    </div>
                    <div
                      className={`inline-block bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-2`}
                    >
                      {category.products}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-2 group-hover:text-pink-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="text-center text-xs text-gray-500">
                    Popular: {category.popular}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 bg-pink-600 text-white py-2 rounded-lg text-center font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Explore Now →
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="max-w-7xl mx-auto px-4 mb-10 mt-11">
              <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 text-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Fashion Items</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">30K+</div>
                  <div className="text-sm text-gray-600">Happy Shoppers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">4.9⭐</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600">Free</div>
                  <div className="text-sm text-gray-600">Easy Returns</div>
                </div>
              </div>
            </div>

            {/* Trending Teaser */}
            <div className="mt-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">🔥 Trending Fashion</h3>
              <p className="mb-6 opacity-90">
                This week’s hottest picks in T-Shirts, Shirts & more!
              </p>
              <button
                onClick={showTrendingProducts}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                View Trending Outfits
              </button>
            </div>

            {/* Floating Shop Button */}
            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
              <button
                onClick={() => navigate("/categories")}
                className="bg-pink-600 text-white px-4 py-2 rounded-l-full shadow-lg hover:bg-pink-800 transition-all"
              >
                🛍️ Shop
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lifestyle;
