import React from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "../mainbg1.png";
import "../mainbg2.png";
import "../mainbg3.png";
const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div className="main">
      <div className="writing-section">
        <div>
          <h2 className="h2m">
            Yvette cooperate co-ords <br />
            <span> – where classic meets chic</span>
          </h2>
          <p className="pm1">Discover Your Signature Look</p>
          <button onClick={handleClick} className="shopButton">
            Shop For The Look
            <i className="fas fa-arrow-up text-white"></i>
          </button>
        </div>
      </div>
      <div className="images-section">
        <img src="../mainbg1.png" alt="1" />
        <img src="../mainbg2.png" alt=" 2" />
        <img src="../mainbg3.png" alt=" 3" />
      </div>
    </div>
  );
};

export default Main;
