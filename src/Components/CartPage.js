import React, { useEffect } from "react";
import { useCart } from "./cartcontext";
import { FaTrash } from "react-icons/fa";
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Sync cart with local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, increment) => {
    updateQuantity(productId, increment);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price); // Ensure it's a number
      const quantity = product.quantity || 1; // Default to 1 if no quantity exists
      if (!isNaN(price)) {
        total += price * quantity;
      }
      return total;
    }, 0);
  };

  const total = calculateTotal();

  if (!cart.length)
    return <div className="container mt-5">Your cart is empty.</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="row">
        {cart.map((product) => (
          <div className="col-md-12 mb-4" key={product._id}>
            <div className="card d-flex flex-row">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ width: "150px", height: "auto" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ₦{product.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className=" mt-4">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleQuantityChange(product._id, -1)}
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleQuantityChange(product._id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-danger btn-sm ms-3 mt-4"
                      onClick={() => handleRemove(product._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center">Total: ₦{total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;
