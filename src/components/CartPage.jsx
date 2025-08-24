import { ShoppingCart, Trash2 } from "lucide-react";

const CartPage = ({ cart, setCurrentPage, updateCartQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setCurrentPage('checkout');
  };

  const goBackToProducts = () => {
    setCurrentPage('product-details');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
      {/* Cart Items Section */}
      <div className="lg:col-span-2">
        <button
          onClick={goBackToProducts}
          className="text-orange-700 hover:text-orange-800 mb-6"
        >
          ← Back to Products Details
        </button>
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Cart ({cart.length})</h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-8 text-center">
            <p className="text-gray-500 text-lg">Your cart is empty 😔</p>
            <button
              onClick={goBackToProducts}
              className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500">${item.price} each</p>
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => updateCartQuantity(item.id, -1)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, 1)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-orange-600 hover:text-orange-700"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary Section */}
      {cart.length > 0 && (
        <div className="lg:sticky lg:top-20 h-fit bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total</span>
            <span className="text-green-600">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={goBackToProducts}
            className="mt-4 w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
