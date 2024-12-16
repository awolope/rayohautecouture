import React, { useEffect, useState } from "react";
import "./product.css";
import { useCart } from "./CartContext"; // Import the cart context
const ProductPage = () => {
  const { addToCart, cart } = useCart(); // Use the cart context
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/product");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product._id}>
            <div className="card position-relative">
              {/* Discount label */}
              {product.sales && (
                <span className="discount-label position-absolute">
                  {product.discount}% off
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₦{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  {cart.find((item) => item._id === product._id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
