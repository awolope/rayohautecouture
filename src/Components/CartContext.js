import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cart.find((item) => item._id === product._id);
    if (isProductInCart) {
      // Remove the product if it already exists
      setCart(cart.filter((item) => item._id !== product._id));
    } else {
      // Add the product with a default quantity of 1 if it doesn't exist
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (product, quantity) => {
    setCart(
      cart.map((item) =>
        item._id === product._id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item._id !== product._id));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        calculateTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
