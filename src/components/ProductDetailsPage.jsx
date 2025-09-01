import { useState } from "react";
import toast from "react-hot-toast";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = ({
  currentProduct,
  setCurrentPage,
  currentCategory,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(currentProduct, quantity);
    toast.success(`${currentProduct.name} added to cart! 🎉`, {
      duration: 2500,
      style: {
        background: "#fff",
        color: "orange",
        fontWeight: "600",
        borderRadius: "10px",
        padding: "12px 20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
      iconTheme: {
        primary: "#16a34a",
        secondary: "#ffffff",
      },
    });
  };

  const handleBuyNow = () => {
    addToCart(currentProduct, quantity);
    // setCurrentPage("cart");
    navigate("/cart")
  };

  const goBackToProducts = () => {
    setCurrentPage("products");
  };

  if (!currentProduct) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 fade-in">
      {/* Back Button */}
      <button
        onClick={goBackToProducts}
        className="text-orange-700 hover:text-orange-800 mb-6"
      >
        ← Back to Products
      </button>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* LEFT: Product Image */}
        <div className="bg-white p-8 relative rounded-xl shadow-lg flex items-center justify-center">
          <div className="text-[8rem]">
            {currentProduct.image ? (
              <img src={currentProduct.image} alt={currentProduct.name} className="h-full absolute inset-0 rounded-xl w-full object-cover" />
            ) : (
              currentProduct.emoji || '🛒'
            )}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentProduct.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-orange-600 opacity-85 text-white px-2 py-1 text-sm rounded flex items-center">
              4.5 <Star size={14} className="ml-1" />
            </span>
            <span className="text-gray-500 text-sm">(2,341 Ratings & 321 Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-orange-600 opacity-85 mb-2">
            ${currentProduct.price}
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Inclusive of all taxes. Free Delivery.
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Highlights:</h2>
            <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
              <li>Top quality product</li>
              <li>Fast delivery available</li>
              <li>1 Year warranty</li>
              <li>Easy returns within 7 days</li>
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity:
            </label>
            <div className="flex items-center space-x-3">
              <button
                onClick={decreaseQuantity}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Similar Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-5xl text-center mb-3">✨</div>
              <h3 className="text-md font-semibold mb-1">Product {i}</h3>
              <p className="text-green-600 font-bold">$29</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
