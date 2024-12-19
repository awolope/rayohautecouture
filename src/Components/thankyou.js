import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  // Function to navigate back to the homepage
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5 m-5">
      <div className="text-left mt-5">
        <h2 mt-5>Thank You for Choosing Rayo Haute Couture!</h2>
        <p>
          We're thrilled to have you as part of our fashion family! Your order
          has been successfully placed, and our team is already working on
          preparing your exclusive items. You’re just one step away from owning
          a piece of world-class fashion!
        </p>

        <h4>We Can’t Wait to See You Rock Our Designs!</h4>
        <p>
          At <strong>Rayo Haute Couture</strong>, we believe in bringing your
          fashion dreams to life. Keep an eye on your inbox for order updates
          and special offers tailored just for you.
        </p>

        <p>
          While you wait, why not check out our new arrivals and the latest
          trends? There's always something exciting happening at Rayo Haute
          Couture.
        </p>

        <div className="mt-4">
          <button className="shopButton mb-5" onClick={goToHomePage}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
