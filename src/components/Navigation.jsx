import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react"; // modern icon

const Navigation = ({ currentPage, setCurrentPage, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = ["home", "categories"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#a27731] shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-extrabold text-white tracking-wide cursor-pointer"
          >
            <span className="bg-gray-50 bg-clip-text text-transparent">
              UPODHOUKON
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {pages.map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentPage(page)}
                className={`relative px-3 py-2 text-white font-medium transition-all 
                  ${currentPage === page
                    ? "after:w-full"
                    : "hover:after:w-full"} 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                  after:bg-white after:w-0 after:transition-all after:duration-300`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </motion.button>
            ))}

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentPage("cart")}
              className="relative flex items-center gap-2 bg-white text-orange-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-100 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white px-4 pb-4 space-y-3 shadow-lg"
          >
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-white font-medium transition-all 
                  ${currentPage === page ? "bg-orange-800 text-orange-600" : "hover:bg-white/20"}`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}

            {/* Mobile Cart */}
            <button
              onClick={() => {
                setCurrentPage("cart");
                setIsMenuOpen(false);
              }}
              className="relative flex items-center gap-2 bg-white text-orange-600 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-100 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
