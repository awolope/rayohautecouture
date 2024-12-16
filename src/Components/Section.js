import React from "react";
import { useNavigate } from "react-router-dom";
import "./section.css"; // Import the CSS file
import "../maindiv1.png";
import "../maindiv2.png";
const Section = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div>
      {" "}
      <h1 className="sh1">
        Pretty Girls <span>Wear Rayo!!!!</span>
      </h1>
      <div className="viewdiv">
        {" "}
        <button onClick={handleClick} className="shopButton ">
          View Collection
          <i className="fas fa-arrow-up text-white"></i>
        </button>
      </div>
      <section className="section">
        <div className="image-note">
          <div className="image-wrapper">
            <img
              src="../maindiv1.png"
              alt="Accesory"
              className="responsive-img"
            />
          </div>
          <div className="note">
            <h3 className="h3s">
              Handcrafted Beads,
              <br />
              <span className="color-text">Timeless Elegance</span>
            </h3>
            <p>
              Our meticulously crafted sets blend cultural heritage with modern
              style. Perfect for any occasion, from casual chic to formal
              glamour.
            </p>
          </div>
        </div>
        <div className="image-note">
          <div className="image-wrapper mt-5">
            <img
              src="../maindiv2.png"
              alt="Accesory"
              className="responsive-img mt-5"
            />
          </div>
          <div className="note mt-5">
            <h3 className="h3s mt-5">
              <span className="color-text mt-5">Elevate Your </span>
              <br />
              Neckline
            </h3>
            <p>
              Our exquisite neckpieces are more than just jewelry - they're
              wearable art. Crafted with precision and inspired by Nigerian
              traditions, each piece adds a touch of sophistication to any
              outfit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
