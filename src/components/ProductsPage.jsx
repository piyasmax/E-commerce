import React, { useState, useEffect } from 'react';
import products from '../data/products.js';
import { useNavigate } from "react-router-dom";

const ProductsPage = ({ currentCategory, setCurrentPage, setCurrentProduct }) => {
  const categoryNames = {
    'home-garden': 'Home & Garden',
    'personal-care': 'Personal Care',
    'kitchen': 'Kitchen',
    'clothing': 'Clothing',
  };

  // State management
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState({ message: '', show: false });
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const navigate = useNavigate();

  // Initialize products with validation
  useEffect(() => {
    if (products[currentCategory] && Array.isArray(products[currentCategory])) {
      setDisplayedProducts(products[currentCategory]);
    } else {
      setDisplayedProducts([]);
      showNotification(`No products found for category: ${currentCategory}`);
    }
  }, [currentCategory]);

  // Notification handler
  const showNotification = (message) => {
    setNotification({ message, show: true });
    setTimeout(() => setNotification({ message: '', show: false }), 3000);
  };

  // Wishlist handler
  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      showNotification(prev.includes(id) ? 'Removed from wishlist' : 'Added to wishlist!');
      return updatedWishlist;
    });
  };

  // Navigation handler
  const handleProductClick = (product) => {
    setCurrentProduct(product);
    // setCurrentPage('product-details');
    navigate("/product-details")
    showNotification('Opening product details...');
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .product-card {
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #2563eb;
        }
        .discount-badge {
          background: linear-gradient(135deg, #16a34a, #15803d);
          animation: pulse 2s infinite;
        }
        .price-strike {
          position: relative;
        }
        .price-strike::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: #ef4444;
        }
        .wishlist-btn {
          transition: all 0.3s ease;
        }
        .wishlist-btn:hover {
          transform: scale(1.1);
        }
        .wishlist-btn.active {
          color: #ef4444;
          transform: scale(1.1);
        }
        .notification-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          transform: translateX(400px);
          transition: transform 0.3s ease;
        }
        .notification-toast.show {
          transform: translateX(0);
        }
      `}</style>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white shadow-md ">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    setCurrentPage('categories');
                    showNotification('Going back to categories...');
                  }}
                  className="flex items-center text-orange-700 hover:text-orange-800 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back
                </button>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    {categoryNames[currentCategory] || 'Unknown Category'}
                  </h1>
                  <p className="text-sm text-gray-600">
                    Showing <span id="product-count">1-{displayedProducts.length}</span> of{' '}
                    {products[currentCategory]?.length || 0} results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedProducts.length === 0 ? (
              <p className="text-gray-600 text-center col-span-full">No products available in this category.</p>
            ) : (
              displayedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="relative product-card bg-white rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 border border-gray-100 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`wishlist-btn absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-md hover:bg-red-50 transition ${wishlist.includes(product.id) ? 'active' : ''
                      }`}
                  >
                    <span className="text-lg">
                      {wishlist.includes(product.id) ? '❤️' : '🤍'}
                    </span>
                  </button>

                  {/* Discount Badge */}
                  {(product.discount || 0) > 0 && (
                    <span className="discount-badge absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md">
                      {product.discount}% OFF
                    </span>
                  )}

                  {/* Product Image / Emoji */}
                  <div
                    onClick={() => handleProductClick(product)}
                    className="flex justify-center items-center relative h-48 mb-4 text-7xl group-hover:scale-110 transition-transform"
                  >
                    {product.image ? (
                      <img src={product.image} alt={product.name} className=" absolute inset-0 max-h-full max-w-full object-cover rounded-t-2xl" />
                    ) : (
                      product.emoji || '🛒'
                    )}
                  </div>

                  {/* Details */}
                  <div
                    onClick={() => handleProductClick(product)}
                    className="px-5 pb-5"
                  >
                    <h3 className="text-lg font-semibold mb-1 truncate">
                      {product.name || 'Unnamed Product'}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#c94f02] font-bold text-xl">
                        ${(product.price || 0).toLocaleString()}
                      </span>
                      {(product.oldPrice || 0) > (product.price || 0) && (
                        <span className="text-gray-400 price-strike text-sm">
                          ${(product.oldPrice || 0).toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm h-10 overflow-hidden">
                      {product.description || 'High-quality product for your needs'}
                    </p>
                  </div>

                  {/* Add to Cart */}
                  <div className="px-5 pb-4">
                    <button
                      onClick={() => handleProductClick(product)}
                      className="w-full py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition font-semibold cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Notification Toast */}
        <div
          className={`notification-toast bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg ${notification.show ? 'show' : ''
            }`}
        >
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{notification.message}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;