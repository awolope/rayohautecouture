import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"; // Import CSS for styling

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send only the email
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="h1s">
        Welcome to <span className="brown-text"> RayoHaute</span> Couture
      </h1>
      <h2 className="h1s">
        <span className="brown-text">A World Class Brand</span>
      </h2>
      <h3 className="h1s">Happy Shopping!</h3>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;
