import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";
import hero1 from '../assets/img/hero.jpg';
import hero2 from '../assets/img/hero2.jpg';
import hero3 from '../assets/img/hero3.jpg';

const CategoriesPage = ({ setCurrentPage, setCurrentCategory }) => {

  const heroimg =[hero1,hero2,hero3]

  const navigate = useNavigate(); // ✅ initialize navigation

  const categories = [
    {
      id: "home-garden",
      name: "Home & Garden",
      emoji: "🏡",
      description: "Sustainable home and garden essentials",
      color: "from-orange-500 to-yellow-500",
      products: "250+ Products",
      popular: "Bamboo Planters",
    },
    {
      id: "personal-care",
      name: "Personal Care",
      emoji: "🧴",
      description: "Natural beauty and wellness products",
      color: "from-yellow-500 to-orange-500",
      products: "180+ Products",
      popular: "Organic Skincare",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      emoji: "🍽️",
      description: "Eco-friendly kitchen and dining items",
      color: "from-yellow-500 to-orange-500",
      products: "320+ Products",
      popular: "Steel Straws",
    },
    {
      id: "clothing",
      name: "Clothing",
      emoji: "👕",
      description: "Sustainable fashion and accessories",
      color: "from-orange-500 to-yellow-500",
      products: "150+ Products",
      popular: "Organic Cotton",
    },
  ];


  const handleCategoryClick = (categoryId) => {
    setCurrentCategory(categoryId);
    navigate("/products");
  };


  const showTrendingProducts = () => {
    alert("🔥 Trending products feature coming soon!");
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="py-5 mb-2 mt-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold font-serif mb-4 text-amber-700 drop-shadow-sm"
          >
            🛍️ Categories
          </motion.h1>
          <p className="text-sm text-gray-600 opacity-80 mb-6">
            Discover sustainable products that make a difference
          </p>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full"></div>
        </div>
      </div>

      <div>
        <ImageCarousel images={heroimg} />
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 font-serif">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-sm opacity-80">
            Find exactly what you're looking for
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
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2 group-hover:text-orange-600">
                {category.name}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                {category.description}
              </p>
              <div className="text-center text-xs text-gray-500">
                Popular: {category.popular}
              </div>
              <div className="absolute bottom-4 left-6 right-6 bg-orange-600 text-white py-2 rounded-lg text-center font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                Explore Now →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-4 mb-10 mt-11">
          <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 text-center gap-4">
            <div>
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">4.8⭐</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Trending Teaser */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🔥 Trending This Week</h3>
          <p className="mb-6 opacity-90">
            Don't miss out on our most popular eco-friendly products!
          </p>
          <button
            onClick={showTrendingProducts}
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View Trending Products
          </button>
        </div>

        {/* Hanging Button */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
          <button
            onClick={() => navigate("/lifestyle")}
            className="bg-orange-500 text-white px-4 py-2 rounded-l-full shadow-lg hover:bg-orange-700 transition-all"
          >
            🛒 Shop
          </button>
        </div>



      </div>
    </div>
  );
};

export default CategoriesPage;
