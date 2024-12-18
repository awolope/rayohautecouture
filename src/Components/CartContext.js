import React, { createContext, useContext, useState, useMemo } from "react";

// Create the Cart context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State for managing the cart
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [] // Load cart from local storage if available
  );

  // Function to add an item to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, increment) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? { ...product, quantity: product.quantity + increment }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Memoized cart count to optimize performance
  const cartCount = useMemo(() => cart.length, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity, // Include updateQuantity in the context
        clearCart,
        cartCount, // Provide cartCount in the context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
