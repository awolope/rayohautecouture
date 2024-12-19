import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./producthero.css";

const ProductHero = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="countdown-sectionp">
      <div className="left-contentp">
        <h2 className="h2cs">today's flashsale!</h2>
        <p>
          Enjoy a Stunning 30% Discount on All Orders During Our Countdown Event
        </p>
        <button onClick={handleClick} className="shopButtonh">
          <i className="fas fa-fire text-white"></i>
          Buy Now
        </button>
      </div>
      <div className="right-timerp">
        <div className="timerp">
          <div className="time-blockp">
            <div className="time-unitp">
              {hours.toString().padStart(2, "0")}
            </div>
            <span>:</span>
            <div className="time-unitp">
              {minutes.toString().padStart(2, "0")}
            </div>
            <span>:</span>
            <div className="time-unitp">{secs.toString().padStart(2, "0")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
