import React, { useState } from "react";

// Sample cart data for demonstration purposes
const sampleCartItems = [
  { product: { name: "Product 1", price: 50 }, quantity: 2 },
  { product: { name: "Product 2", price: 30 }, quantity: 1 },
];

const CheckoutPage = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Calculate total amount based on cart items
  const totalAmount = sampleCartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, address, accountNumber } = formData;

    const response = await fetch(`/api/orders/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "user@example.com", // Replace with actual user email
        items: sampleCartItems, // Use actual cart items here
        total: totalAmount,
        address,
        phone,
      }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Business Owner Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
      <h3>Your Cart</h3>
      <ul>
        {sampleCartItems.map((item, index) => (
          <li key={index}>
            {item.product.name} - ${item.product.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total Amount: ${totalAmount}</h4>
    </div>
  );
};

export default CheckoutPage;
