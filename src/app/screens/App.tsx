import "../css/app.css";
import { Container } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./homePage";
import ProductListPage from "./productListPage";
import ProductDetailPage from "./productDetailPage";
import CartPage from "./cartPage";
import CheckoutPage from "./checkoutPage";
import AccountPage from "./accountPage";
import SearchPage from "./searchPage";
import NotFoundPage from "./notFoundPage";

function App() {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            padding: "1rem",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
