import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./countdownsection.css";

const CountdownSection = () => {
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
    <div className="countdown-section">
      <div className="left-content">
        <h2 className="h2cs">
          Don't miss <span className="color-text">today's flashsale!</span>
        </h2>
        <p>
          Grab your favorites at unbeatable prices in our exclusive
          flashsale—today only!
        </p>
        <button onClick={handleClick} className="shopButton btn">
          <i className="fas fa-fire text-white"></i>
          Buy Now
        </button>
      </div>
      <div className="image-background"></div>
      <div className="right-timer">
        <div className="timer">
          <div className="time-block">
            <div className="time-unit">{hours.toString().padStart(2, "0")}</div>
            <span>:</span>
            <div className="time-unit">
              {minutes.toString().padStart(2, "0")}
            </div>
            <span>:</span>
            <div className="time-unit">{secs.toString().padStart(2, "0")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
