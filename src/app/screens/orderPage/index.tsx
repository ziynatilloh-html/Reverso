import React from "react";
import { Routes, Route } from "react-router-dom";
import OrdersPage from "./OrderPage";
import CheckoutPage from "./CheckOut";


export default function OrderPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrdersPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
