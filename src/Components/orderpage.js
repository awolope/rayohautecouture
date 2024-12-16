import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const OrderPage = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const sendOrderToClient = () => {
    if (!customerName || !customerEmail) {
      setMessage("Please fill in all fields!");
      return;
    }

    // Send order details to the client (your email)
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "TEMPLATE_ID_FOR_CLIENT", // Replace with your EmailJS Template ID for client emails
        {
          customer_name: customerName,
          customer_email: customerEmail,
          order_details: cart
            .map((item) => `${item.name} - ₦${item.price}`)
            .join("\n"),
          total_price: totalPrice,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setOrderPlaced(true);
          setMessage("Order sent to the client for confirmation.");
        },
        (error) => {
          console.error("Email sending error:", error);
          setMessage("Failed to send the order. Please try again.");
        }
      );
  };

  const confirmOrderAndSendReceipt = () => {
    if (!orderPlaced) {
      setMessage("Please place the order first!");
      return;
    }

    // Send receipt to the customer
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "TEMPLATE_ID_FOR_CUSTOMER", // Replace with your EmailJS Template ID for customer emails
        {
          customer_name: customerName,
          order_details: cart
            .map((item) => `${item.name} - ₦${item.price}`)
            .join("\n"),
          total_price: totalPrice,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setOrderConfirmed(true);
          setMessage("Receipt sent to the customer.");
          localStorage.removeItem("cart"); // Clear the cart after confirmation
        },
        (error) => {
          console.error("Receipt sending error:", error);
          setMessage("Failed to send the receipt. Please try again.");
        }
      );
  };

  if (cart.length === 0) return <div>Your cart is empty!</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Order Confirmation</h1>
      {orderConfirmed ? (
        <div className="alert alert-success">
          The receipt has been sent to the customer ({customerEmail}).
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map((product) => (
              <div className="col-md-3 col-sm-6 mb-4" key={product._id}>
                <div className="card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ₦{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4>Total Price: ₦{totalPrice}</h4>
          <form>
            <div className="form-group">
              <label>Customer Name</label>
              <input
                type="text"
                className="form-control"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Customer Email</label>
              <input
                type="email"
                className="form-control"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
            {!orderPlaced ? (
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={sendOrderToClient}
              >
                Place Order
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success mt-3"
                onClick={confirmOrderAndSendReceipt}
              >
                Confirm Order & Send Receipt
              </button>
            )}
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </>
      )}
    </div>
  );
};

export default OrderPage;
