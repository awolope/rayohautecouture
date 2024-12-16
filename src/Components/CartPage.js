import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CartPage = () => {
  const { cart, setCart, updateCartQuantity, removeFromCart, calculateTotal } =
    useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = "userID"; // Example userId (replace with dynamic handling)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/carts/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        setCart(data.items); // Assuming the response contains `items`
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId, setCart]);

  const handleQuantityChange = async (product, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity < 1) return; // Prevent invalid quantities

    if (newQuantity === 0) {
      removeFromCart(product); // Remove product if quantity is 0
    } else {
      await updateCartQuantity(product, newQuantity);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">Your cart is empty.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <div className="input-group">
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          handleQuantityChange(product, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product,
                            parseInt(e.target.value) || 0 // Ensure it's numeric
                          )
                        }
                        style={{ maxWidth: "60px" }}
                      />
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          handleQuantityChange(product, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <h4>Total: ${calculateTotal().toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
