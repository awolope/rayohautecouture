import React, { createContext, useContext, useState, useMemo } from "react";

// Create the Cart context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State for managing the cart
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Ensure all items have a default quantity
    }));
  });

  // Function to add an item to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, increment) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? {
            ...product,
            quantity: Math.max((product.quantity || 1) + increment, 1),
          }
        : product
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Memoized cart count to optimize performance
  const cartCount = useMemo(() => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
