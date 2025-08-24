import { useState, useEffect } from 'react';

const OrderConfirmationPage = ({ setCurrentPage, clearCart }) => {
  const [orderNumber] = useState('ECO' + Math.random().toString(36).substr(2, 9).toUpperCase());

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-center fade-in">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
        <p className="text-xl text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800">Order #{orderNumber}</p>
          <p className="text-green-600">Estimated delivery: 3-5 business days</p>
        </div>
        <button 
          onClick={() => setCurrentPage('home')} 
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transform hover:scale-105 transition-all"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;