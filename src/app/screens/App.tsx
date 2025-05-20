import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./homePage";
import ProductListPage from "./productListPage";
import AccountPage from "./accountPage";
import SearchPage from "./searchPage";
import NotFoundPage from "./notFoundPage";
import { HomeNavbar } from "../components/headers/HomeNavbar";
import OtherNavbar from "../components/headers/OtherNavbar";
import Footer from "../components/footer";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SingupPage";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";
import ResetPasswordPage from "../components/auth/ResetPasswordForm";
import { useGlobal } from "../hooks/useGlobal";
import OrderPageRoutes from "./orderPage";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "../css/basket.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/app.css";

// ✅ Stripe Public Test Key
const stripePromise = loadStripe("pk_test_51RQnE0R2xYxm90hWTuEd0YHvKPbe3LKKDr07FPTeNJCVlS01Mc2kUr1C0IEmk3O39bK0rmyIJ2f8RgeXWoA4Cv0U00hSr9bnQa"); // Replace with your actual test key

function App() {
  const location = useLocation();
  const { authMember } = useGlobal();

  const hideNavAndFooter = [
    "/login",
    "/member/signup",
    "/forgot-password",
    "/reset-password/:token",
  ].includes(location.pathname);

  return (
    <>
      {/* ✅ Navbar logic — based on authMember */}
      {!hideNavAndFooter && (authMember ? <OtherNavbar /> : <HomeNavbar />)}

      {/* ✅ Wrap with Stripe Elements */}
      <Elements stripe={stripePromise}>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductListPage />} />
          <Route path="/order/*" element={<OrderPageRoutes />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/search" element={<SearchPage />} />

          {/* Auth pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/member/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

          {/* Not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Elements>

      {/* ✅ Footer logic */}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
