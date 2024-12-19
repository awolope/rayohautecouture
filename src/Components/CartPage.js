import React, { useState } from "react";
import { useCart } from "./cartcontext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isProceeding, setIsProceeding] = useState(false); // Tracks button state
  const navigate = useNavigate(); // Initialize navigate function

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, increment) => {
    if (
      increment === -1 &&
      cart.find((p) => p._id === productId)?.quantity <= 1
    ) {
      return; // Prevent quantity from going below 1
    }
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

  const handleProceedToPayment = () => {
    setIsProceeding(true); // Update the button text
    setTimeout(() => {
      // Simulate payment processing delay
      // Replace this with actual logic
      setIsProceeding(false); // Reset the button

      // Navigate to the checkout page after successful payment
      navigate("/checkout"); // Redirects to the CheckoutPage
    }, 2000); // 2-second delay for demonstration
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
                    <div className="mt-4">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleQuantityChange(product._id, -1)}
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity || 1}</span>
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
      <div className="text-center mt-4">
        <button
          className="shopButton mb-5"
          onClick={handleProceedToPayment}
          disabled={isProceeding} // Disable the button while proceeding
        >
          {isProceeding ? "Proceeding to Payment..." : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
