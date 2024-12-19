import React, { useState } from "react";
import "./product.css";
import ProductHero from "./producthero";

const ProductPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const products = [
    {
      _id: 1,
      name: "Yveline",
      price: 30000,
      image: "yvette co-ord.png",
      newCollection: true,
    },
    {
      _id: 2,
      name: "Yvette",
      price: 32000,
      image: "yvettepants.png",
      newCollection: true,
    },
    {
      _id: 3,
      name: "Yasmine",
      price: 25000,
      image: "yasmin set.png",
      newCollection: true,
    },
    {
      _id: 4,
      name: "Yara Pearl",
      price: 12000,
      image: "yara.png",
      newCollection: true,
    },
    {
      _id: 5,
      name: "Yvette Top",
      price: 12000,
      image: "yvette top.png",
      newCollection: true,
    },
    {
      _id: 6,
      name: "Yumin Ruffle dress",
      price: 20000,
      image: "countdownbg.png",
      newCollection: true,
    },
    {
      _id: 7,
      name: "Unisex African Pant",
      price: 32000,
      image: "image3.jpeg",
    },
    {
      _id: 8,
      name: "Ample silk dress (mini) white",
      price: 12000,
      image: "image13.jpeg",
    },
    {
      _id: 9,
      name: "Ample silk dress (mini) black",
      price: 12000,
      image: "image12.jpeg",
    },
    {
      _id: 10,
      name: "Ample silk dress (mini) red",
      price: 12000,
      image: "image11.jpeg",
    },
    {
      _id: 11,
      name: "Ample silk dress (mini) green",
      price: 12000,
      image: "image10.jpeg",
    },
    {
      _id: 12,
      name: "Ample silk dress (maxi) white",
      price: 15000,
      image: "image6.jpeg",
    },
    {
      _id: 13,
      name: "Ample silk dress (maxi) black",
      price: 15000,
      image: "image5.jpeg",
    },
    {
      _id: 14,
      name: "Ample silk skirt (black)",
      price: 10000,
      image: "image7.jpeg",
    },
    {
      _id: 15,
      name: "Ample silk skirt",
      price: 10000,
      image: "image8.jpeg",
    },
    {
      _id: 16,
      name: "Ample silk skirt with slit",
      price: 10000,
      image: "image9.jpeg",
    },
    {
      _id: 17,
      name: "milkmaid-top (brown)",
      price: 800,
      image: "image1.jpeg",
    },
    {
      _id: 18,
      name: "milkmaid-top",
      price: 8000,
      image: "image0.jpeg",
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "priceAsc") {
      return a.price - b.price;
    } else if (sortOption === "priceDesc") {
      return b.price - a.price;
    } else if (sortOption === "discountAsc") {
      return (a.discount || 0) - (b.discount || 0);
    } else if (sortOption === "discountDesc") {
      return (b.discount || 0) - (a.discount || 0);
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    if (filterOption === "discount" && product.discount) {
      return true;
    }
    if (filterOption === "newCollection" && product.newCollection) {
      return true;
    }
    return filterOption === "";
  });

  const addToCart = (product) => {
    const updatedCart = cart.find((item) => item._id === product._id)
      ? cart.filter((item) => item._id !== product._id)
      : [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="producthero">
      <ProductHero />
      <div className="container mt-5">
        <div className="dropdown-container">
          <select
            className="normal-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="discountAsc">Discount: Low to High</option>
            <option value="discountDesc">Discount: High to Low</option>
          </select>

          <select
            className="normal-dropdown"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="">Filter By</option>
            <option value="discount">Discounted Products</option>
            <option value="newCollection"> New Collection</option>
          </select>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-4 mb-4" key={product._id}>
              <div className="card position-relative">
                {product.newCollection && (
                  <span className="discount-label position-absolute">New</span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top "
                  height="240px"
                />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title mb-1">{product.name}</h5>
                    <p className="card-text mb-0">₦{product.price}</p>
                  </div>
                  <button
                    className="btn btn-icon"
                    style={{ color: "brown", fontSize: "20px" }}
                    onClick={() => addToCart(product)}
                  >
                    {cart.find((item) => item._id === product._id) ? (
                      <i className="fas fa-trash-alt"></i>
                    ) : (
                      <i className="fas fa-shopping-cart"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
