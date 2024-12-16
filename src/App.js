import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CartPage from "./Components/CartPage";
import ProductPage from "./Components/ProductPage";
import OrderPage from "./Components/orderpage";
import ThankYou from "./Components/thankyou";
import { CartProvider } from "./Components/cartcontext"; // Import the CartProvider
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className="app">
      <React.StrictMode>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/checkout" element={<OrderPage />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
          <Footer />
        </CartProvider>
      </React.StrictMode>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
