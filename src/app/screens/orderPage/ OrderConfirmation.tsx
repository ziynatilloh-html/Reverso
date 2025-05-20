import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { selectCartItems, removeItem, clearCart } from "../../../app/components/headers/cartSlice";
import { serverApi } from "../../../app/libs/config";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/orderPage.css";

const OrderConfirmation = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum: any, item: any) => sum + item.price * item.quantity, 0);
  const discount = 0;
  const shipping = subtotal < 100 ? 5 : 0;
  const total = subtotal - discount + shipping;

  const handleBack = () => {
    navigate("/order/checkout");
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="order-confirmation">
      <div className="confirmation-grid">
        {/* Left - Items */}
        <div className="items-panel">
          <div className="items-header">
            <h2>Items ({cartItems.length})</h2>
            <button className="remove-all" onClick={handleClearCart}>
              <DeleteIcon style={{ fontSize: 20, marginRight: 6 }} />
              <span>Remove all</span>
            </button>
          </div>

          {cartItems.map((item: any) => (
            <div className="item-card" key={item.id}>
              <img src={`${serverApi}/${item.image}`} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>Color: {item.color || "-"}</p>
                <p>Size: {item.size || "-"}</p>
                <div className="qty-box">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
              <div className="item-price">
                ${item.price.toFixed(2)}
                <DeleteIcon
                  className="item-delete-icon"
                  style={{ marginLeft: 10, cursor: "pointer", color: "#c70000" }}
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>
            </div>
          ))}

          <div className="order-summary">
            <h3>Order summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : "FREE"}</span>
            </div>
            <div className="summary-total">
              <span>Total Price</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right - Payment */}
        <div className="payment-panel">
          <h2>Checkout</h2>
          <div className="payment-methods">
            <img src="/icons/mastercard.svg" alt="Mastercard" />
            <img src="/icons/visa.svg" alt="Visa" />
            <img src="/icons/paypal.svg" alt="PayPal" />
          </div>

          <form className="payment-form">
            <label>Cardholder name</label>
            <input type="text" placeholder="Full name on card" required />

            <label>Card number</label>
            <input type="text" placeholder="0000 0000 0000 0000" required />

            <div className="form-row">
              <div>
                <label>Expiration date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div>
                <label>CVC</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            <button type="submit" className="pay-btn">Pay now</button>
          </form>
          <button className="back-btn" onClick={handleBack}>← Back to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
