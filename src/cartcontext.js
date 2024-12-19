import React, { createContext, useContext, useState, useMemo } from "react";

// Create the Cart context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State for managing the cart
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart).map((item) => ({
          ...item,
          quantity: item.quantity || 1, // Ensure default quantity
        }))
      : [];
  });

  // Function to add an item to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    const updatedCart = existingProduct
      ? cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    updateCartState(updatedCart);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    updateCartState(updatedCart);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, increment) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? {
            ...product,
            quantity: Math.max((product.quantity || 1) + increment, 1), // Prevents quantity below 1
          }
        : product
    );
    updateCartState(updatedCart);
  };

  // Function to clear the cart
  const clearCart = () => {
    updateCartState([]);
  };

  // Utility function to update the cart state and sync with local storage
  const updateCartState = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Memoized cart count to optimize performance
  const cartCount = useMemo(
    () => cart.reduce((count, item) => count + (item.quantity || 1), 0),
    [cart]
  );

  // Memoized total price to ensure consistent calculations
  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
