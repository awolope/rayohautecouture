import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./orderpage.css";
const OrderPage = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [paymentMade, setPaymentMade] = useState(false);
  const [message, setMessage] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate(); // For redirection

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to send email to the client (admin)
  const sendClientEmail = () => {
    const emailData = {
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      customer_address: customerAddress,
      order_details: cart
        .map((item) => `${item.name} - ₦${item.price} x ${item.quantity}`)
        .join("\n"),
      total_price: totalPrice,
    };

    emailjs
      .send(
        "service_50r00m6", // Your EmailJS Service ID
        "template_qkvdnih", // Admin Template ID
        emailData,
        "XeQGi4XaWje9cFCUP" // Your EmailJS Public Key
      )
      .then(
        () => {
          setMessage(
            "Admin notified. The receipt will be sent to the customer."
          );
        },
        (error) => {
          console.error("Email sending error:", error);
          setMessage("Failed to send the admin email. Please try again.");
        }
      );
  };

  const confirmOrderAndSendClientEmail = () => {
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
      setMessage("Please fill in all fields!");
      return;
    }

    // Ensure the order is placed before confirming the order
    if (!orderPlaced) {
      setMessage("Please place the order first!");
      return;
    }

    if (!paymentMade) {
      setMessage("Please make the payment first!");
      return;
    }

    // Send email to the client (admin)
    sendClientEmail();

    setOrderConfirmed(true);
    localStorage.removeItem("cart");
    navigate("/thankyou"); // Redirect to thank you page after confirmation
  };

  const handlePayment = () => {
    setPaymentMade(!paymentMade); // Reverse the state of the payment made checkbox
  };

  const handleOrderPlacement = () => {
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
      setMessage("Please fill in all fields!");
      return;
    }
    setOrderPlaced(true);
    setMessage("Order placed successfully. Proceed with payment.");
  };

  if (cart.length === 0) return <div>Your cart is empty!</div>;

  return (
    <div className="container mt-5 ">
      <h1 className="text-center mb-4">Order Confirmation</h1>
      {orderConfirmed ? (
        <div className="alert alert-success">
          The order has been confirmed. The admin has been notified.
        </div>
      ) : (
        <>
          <div className="row">
            {/* Order Details */}
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h4>Order Details</h4>
                  {cart.map((product) => (
                    <div
                      className="d-flex justify-content-between"
                      key={product._id}
                    >
                      <p>{product.name}</p>
                      <p>
                        ₦{product.price} x {product.quantity}
                      </p>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  ))}
                  <h5>Total Price: ₦{totalPrice}</h5>
                </div>
              </div>
            </div>

            {/* Form Details */}
            <div className="col-md-5 ">
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
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />
                </div>

                {/* Account details section */}
                <div className="form-group">
                  <h5>Account Details</h5>
                  <p>
                    <strong>Bank Name:</strong> Moniepoint MFB
                  </p>
                  <p>
                    <strong>Account Number:</strong> 9035884376
                  </p>
                  <p>
                    <strong>Account Name:</strong> Grace Tunrayo Okegbola
                  </p>
                </div>

                {/* Payment checkbox */}
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mb-2"
                    checked={paymentMade}
                    onChange={handlePayment}
                  />
                  <label className="form-check-label">
                    I have made the payment
                  </label>
                </div>

                {/* Complete Order button */}
                {paymentMade && !orderPlaced && (
                  <button
                    type="button"
                    className="shopButtono"
                    onClick={handleOrderPlacement}
                  >
                    Place Order
                  </button>
                )}

                {paymentMade && orderPlaced && (
                  <button
                    className="btn shopButtono mt-3 mb-5"
                    onClick={confirmOrderAndSendClientEmail}
                  >
                    Complete Order
                  </button>
                )}
              </form>
            </div>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
