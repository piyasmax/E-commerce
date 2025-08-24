import { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage.jsx';
import CategoriesPage from './components/CategoriesPage.jsx';
import ProductsPage from './components/ProductsPage.jsx';
import ProductDetailsPage from './components/ProductDetailsPage.jsx';
import CartPage from './components/CartPage.jsx';
import CheckoutPage from './components/CheckoutPage.jsx';
import OrderConfirmationPage from './components/OrderConfirmationPage.jsx';
import { Toaster } from "react-hot-toast";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentProduct, setCurrentProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateCartQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage
          setCurrentPage={setCurrentPage}
          setCurrentCategory={setCurrentCategory}
        />;
      case 'categories':
        return <CategoriesPage setCurrentPage={setCurrentPage} setCurrentCategory={setCurrentCategory} />;
      case 'products':
        return <ProductsPage currentCategory={currentCategory} setCurrentPage={setCurrentPage} setCurrentProduct={setCurrentProduct} />;
      case 'product-details':
        return <ProductDetailsPage currentProduct={currentProduct} setCurrentPage={setCurrentPage} currentCategory={currentCategory} addToCart={addToCart} />;
      case 'cart':
        return <CartPage cart={cart} setCurrentPage={setCurrentPage} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />;
      case 'checkout':
        return <CheckoutPage cart={cart} setCurrentPage={setCurrentPage} />;
      case 'order-confirmation':
        return <OrderConfirmationPage setCurrentPage={setCurrentPage} clearCart={clearCart} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {currentPage !=='home' &&(
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
      />)}
      {renderCurrentPage()}
    </div>
  );
};

export default App;