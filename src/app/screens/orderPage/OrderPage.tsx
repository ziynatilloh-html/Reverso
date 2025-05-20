import React from "react";
import "../../css/orderPage.css";
import { useNavigate, Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const OrdersPage = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {/* ✅ Banner Section */}
      <div className="orders-page-banner">
        <div className="orders-banner-content">
          <div className="orders-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Orders</span>
          </div>
          <h1 className="orders-heading-title">Order List</h1>
        </div>
      </div>

      {/* ✅ Cart Table Section */}
      <div className="order-page">
        <form className="cart-form">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Images</th>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><DeleteIcon className="delete-icon" /></td>
                <td><img src="/img/sample1.jpg" alt="Product" className="product-thumb" /></td>
                <td>Juma Rema Pola</td>
                <td>$46.80</td>
                <td>
                  <input type="number" min={1} defaultValue={1} className="quantity-input" />
                </td>
                <td><strong>$46.80</strong></td>
              </tr>
              <tr>
                <td><DeleteIcon className="delete-icon" /></td>
                <td><img src="/img/sample2.jpg" alt="Product" className="product-thumb" /></td>
                <td>Bag Goodscol Model</td>
                <td>$71.80</td>
                <td>
                  <input type="number" min={1} defaultValue={1} className="quantity-input" />
                </td>
                <td><strong>$71.80</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="cart-actions">

            <button type="button" className="update-cart-btn">Update Cart</button>
          </div>
        </form>

        {/* ✅ Totals Section */}
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <table>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>$118.60</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>$118.60</td>
              </tr>
            </tbody>
          </table>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
