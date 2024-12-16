import React from "react";
import { Link } from "react-router-dom";
//import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <h1>Thank You for Your Order!</h1>
      <p>
        Your order has been placed successfully. We will send you an email with
        the details shortly.
      </p>
      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  );
};

export default ThankYou;
