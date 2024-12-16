import React, { useEffect } from "react";
import { useCart } from "./cartcontext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Sync cart with local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  if (!cart.length)
    return <div className="container mt-5">Your cart is empty.</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="row">
        {cart.map((product) => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₦{product.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(product._id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
