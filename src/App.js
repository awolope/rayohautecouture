import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "@fontsource/inter";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "./App.css";
import CartPage from "./Components/CartPage";
import { CartProvider } from "./Components/CartContext";
import ProductPage from "./Components/ProductPage";
import Login from "./Components/login";
import Signup from "./Components/signup";
import ThankYou from "./Components/thankyou";
import CheckoutPage from "./Components/checkoutpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const location = useLocation();

  // Define routes where you don't want to show Navbar and Footer
  const hideNavbarAndFooter = ["/login", "/"];

  // Check if the current path matches any in the array
  const shouldHideNavbarAndFooter = hideNavbarAndFooter.includes(
    location.pathname
  );

  return (
    <div className="app">
      <CartProvider>
        {/* Render Navbar only if it's not a login or signup page */}
        {!shouldHideNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        {/* Render Footer only if it's not a login or signup page */}
        {!shouldHideNavbarAndFooter && <Footer />}
      </CartProvider>
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
