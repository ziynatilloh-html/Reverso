import React from "react";
import { Routes, Route } from "react-router-dom";
import OrdersPage from "./OrderPage";
import CheckoutPage from "./CheckOut";
import OrderConfirmation from "./ OrderConfirmation";


export default function OrderPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrdersPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/:orderId" element={<OrderConfirmation />} />
    </Routes>
  );
}
