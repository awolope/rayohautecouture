import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./reviews.css"; // Add appropriate CSS for styling

emailjs.init({
  publicKey: "XeQGi4XaWje9cFCUP", // Replace with your actual public key
});

const ReviewsContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_50r00m6", // Replace with your Email.js service ID
        "template_5i1viqn", // Replace with your Email.js template ID
        templateParams, // Use the `templateParams` variable here

        "XeQGi4XaWje9cFCUP" // Ensure this matches the initialization
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="reviews-contact-container">
      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-heading">Customer Reviews</h2>
        <div className="review">
          <img
            src="/path-to-profile-pic1.jpg" // Replace with actual image path
            alt="Reviewer 1"
            className="review-pic"
          />
          <div className="review-content">
            <p className="review-text">
              I just received my order, I love the fabric and how it fits 🤗
              You're the best! I'll definitely be getting more dresses from you
              and tell my friends about your brand. Thank you so much!
            </p>
          </div>
        </div>
        <div className="review">
          <div className="review-content">
            <p className="review-text">
              Thank you so much! I just received the gown. I love the fabric and
              how it fits ❤️
            </p>
          </div>
          <img
            src="/path-to-profile-pic2.jpg" // Replace with actual image path
            alt="Reviewer 2"
            className="review-pic"
          />
        </div>
        <div className="review">
          <img
            src="/path-to-profile-pic2.jpg" // Replace with actual image path
            alt="Reviewer 2"
            className="review-pic"
          />
          <div className="review-content">
            <p className="review-text">
              I love it 🥺🥺🥺 It's so fineeeeee ❤️ Thank you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section">
        <h2 className="contact-heading" id="contact-us">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="shopButton">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsContact;
