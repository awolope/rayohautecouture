import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import "./headerbg.png";
const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div class="header">
      <div class="header-content">
        <div>
          <h1 className="h1h">
            Threaded To Your
            <div className="curved-line-container">
              <div className="curved-line"></div>
            </div>
            Taste
          </h1>
        </div>
        <p className="hp1">
          Wear your heritage with pride and step into the future with
          confidence. Explore our collection to find the perfect outfit that
          speaks to your unique style and personality.{" "}
        </p>
        <button onClick={handleClick} className="shopButton">
          <i className="fas fa-fire text-white"></i>
          Shop Now
        </button>
        <br />
        <div className="international">
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_36_42)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 0.961914C17.2978 1.25331 17.0934 1.54301 16.8868 1.83101C12.5878 7.82417 7.34596 13.0778 1.36619 17.3864C1.07915 17.5932 0.790415 17.7978 0.5 18.0003C0.790351 18.2028 1.07903 18.4075 1.36601 18.6144C7.34443 22.9247 12.586 28.1781 16.8867 34.1699C17.0933 34.4578 17.2977 34.7474 17.5 35.0386C17.7021 34.7473 17.9063 34.4575 18.1128 34.1696C22.41 28.1749 27.6521 22.9211 33.6332 18.6142C33.9205 18.4074 34.2094 18.2027 34.5 18.0003C34.2093 17.7979 33.9203 17.5934 33.633 17.3866C27.6505 13.0814 22.4083 7.82735 18.1127 1.83139C17.9062 1.54326 17.702 1.25344 17.5 0.961914ZM17.4995 2.69109C13.2409 8.56629 8.08561 13.7328 2.22302 18.0005C8.08433 22.2698 13.2394 27.4362 17.4995 33.3102C21.7562 27.4335 26.9117 22.2667 32.7755 18.0005C26.9104 13.7359 21.7547 8.56896 17.4995 2.69109Z"
                fill="#734636"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_42">
                <rect width="33" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>International Delivery</p>
        </div>
        <br />
        <div className="hassle">
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_36_42)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 0.961914C17.2978 1.25331 17.0934 1.54301 16.8868 1.83101C12.5878 7.82417 7.34596 13.0778 1.36619 17.3864C1.07915 17.5932 0.790415 17.7978 0.5 18.0003C0.790351 18.2028 1.07903 18.4075 1.36601 18.6144C7.34443 22.9247 12.586 28.1781 16.8867 34.1699C17.0933 34.4578 17.2977 34.7474 17.5 35.0386C17.7021 34.7473 17.9063 34.4575 18.1128 34.1696C22.41 28.1749 27.6521 22.9211 33.6332 18.6142C33.9205 18.4074 34.2094 18.2027 34.5 18.0003C34.2093 17.7979 33.9203 17.5934 33.633 17.3866C27.6505 13.0814 22.4083 7.82735 18.1127 1.83139C17.9062 1.54326 17.702 1.25344 17.5 0.961914ZM17.4995 2.69109C13.2409 8.56629 8.08561 13.7328 2.22302 18.0005C8.08433 22.2698 13.2394 27.4362 17.4995 33.3102C21.7562 27.4335 26.9117 22.2667 32.7755 18.0005C26.9104 13.7359 21.7547 8.56896 17.4995 2.69109Z"
                fill="#734636"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_42">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Hassle Free Returns</p>
        </div>
      </div>

      <div className="image-side"></div>
    </div>
  );
};

export default Header;
