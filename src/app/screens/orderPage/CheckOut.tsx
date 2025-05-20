import React, { useState } from "react";
import { useAppSelector } from "../hooks";
import { selectCartItems } from "../../../app/components/headers/cartSlice";
import OrderService from "../../../app/service/OrderService";
import { useNavigate } from "react-router-dom";
import "../../css/orderPage.css";

const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "CARD"
  });

  const subtotal = cartItems.reduce((sum:any, item:any) => sum + item.price * item.quantity, 0);
  const delivery = subtotal < 100 ? 5 : 0;
  const total = subtotal + delivery;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    try {
      const orderInput = {
        shippingAddress: {
          fullName: form.fullName,
          phone: form.phone,
          address: form.address,
          city: form.city,
          postalCode: form.postalCode,
          country: form.country
        },
        paymentMethod: form.paymentMethod,
        orderItems: cartItems.map((item:any) => ({
          productId: item.id,
          itemPrice: item.price,
          itemQuantity: item.quantity
        }))
      };

      const orderService = new OrderService();
      const result = await orderService.createOrder(orderInput);
      console.log("✅ Order placed:", result);
      // redirect or show success page here
    } catch (err) {
      console.error("❌ Failed to place order", err);
    }
  };

  const handleBack = () => {
    navigate("/order");
  };

  return (
    <div className="checkout-wrapper">
      {/* Progress Tracker */}
      <div className="horizontal-tracker">
        <div className="tracker-bar">
          {["Proceed to Checkout", "Place Order", "Order Finished"].map((label, index) => (
            <div key={index} className={`step-item ${index <= 1 ? "active" : ""}`}>
              <div className="circle">{index < 1 ? "✓" : index + 1}</div>
              <p className="label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout-content">
        {/* Billing Form */}
        <div className="billing-form">
          <h2>Billing Details</h2>
          <form>
            <label>Country *</label>
            <input name="country" onChange={handleChange} required />
            <div className="row">
              <div>
                <label>Full Name *</label>
                <input name="fullName" onChange={handleChange} required />
              </div>
              <div>
                <label>Phone *</label>
                <input name="phone" onChange={handleChange} required />
              </div>
            </div>
            <label>Address *</label>
            <input name="address" onChange={handleChange} required />
            <label>City *</label>
            <input name="city" onChange={handleChange} required />
            <label>Postal Code *</label>
            <input name="postalCode" onChange={handleChange} required />

            <label>Payment Method *</label>
            <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
              <option value="CARD">Card</option>
              <option value="PAYPAL">PayPal</option>
              <option value="CASH_ON_DELIVERY">Cash on Delivery</option>
            </select>
          </form>
          <button className="back-btn" onClick={handleBack}>← Back to Cart</button>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Your Order</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item:any) => (
                <tr key={item.id}>
                  <td>{item.name} × {item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <th>Cart Subtotal</th>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Order Total</th>
                <td><strong>${total.toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>

          <button onClick={handlePlaceOrder} className="checkout-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;