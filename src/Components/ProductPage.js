import React, { useState } from "react";
import "./product.css";

const ProductPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Product data
  const products = [
    {
      _id: 1,
      name: "Product 1",
      price: 5000,
      image: "image1.jpg",
      discount: 10,
    },
    {
      _id: 2,
      name: "Product 2",
      price: 8000,
      image: "image2.jpg",
      discount: 15,
    },
    {
      _id: 3,
      name: "Product 3",
      price: 3000,
      image: "image3.jpg",
      sales: true,
    },
    {
      _id: 4,
      name: "Product 4",
      price: 7000,
      image: "image4.jpg",
      discount: 20,
    },
    {
      _id: 5,
      name: "Product 5",
      price: 6000,
      image: "image5.jpg",
      sales: true,
    },
  ];

  const addToCart = (product) => {
    const updatedCart = cart.find((item) => item._id === product._id)
      ? cart.filter((item) => item._id !== product._id) // Remove from cart
      : [...cart, product]; // Add to cart
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product._id}>
            <div className="card position-relative">
              {/* Discount Label */}
              {product.discount && (
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
