import {
  Box,
  Button,
  Container,
  Stack,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import MiniCartDrawer from "./Basket";
import { useState } from "react";
import { useGlobal } from "../../../app/hooks/useGlobal";
import { serverApi } from "../../../app/libs/config";

export default function OtherNavbar() {
  const { authMember, setAuthMember } = useGlobal();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("memberData");
    setAuthMember(null);
    navigate("/");
    handleMenuClose();
  };

  return (
    <div className="home-navbar">
      <Container sx={{ mt: "30px", height: "80px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {/* Logo */}
          <Box>
            <NavLink to="/">
              <img
                src="/img/logo.png"
                alt="Reverso Logo"
                style={{ height: "190px", objectFit: "contain" }}
              />
            </NavLink>
          </Box>

          {/* Navigation */}
          <Stack direction="row" spacing={4} alignItems="center">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Shop</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact Us</NavLink>

            {/* Cart Drawer */}
            <MiniCartDrawer isOpen={isCartOpen} onClose={handleCartClose} />

            {/* Always visible My Page and Orders */}
            {authMember && (
              <>
                <NavLink to="/orders" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Orders</NavLink>
                <NavLink to="/account" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>My Page</NavLink>
              </>
            )}

            {/* Hamburger Dropdown Button (Circle Avatar & Menu) */}
            {authMember ? (
              <>
                <IconButton onClick={handleAvatarClick}>
                  <Avatar
                    alt={authMember.memberNick}
                    src={`${serverApi}/${authMember.memberImage}`}
                    sx={{ width: 40, height: 40 }}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={() => { navigate("/account"); handleMenuClose(); }}>My Page</MenuItem>
                  <MenuItem onClick={() => { navigate("/orders"); handleMenuClose(); }}>Orders</MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#343434", color: "#f8f8ff" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}

            {/* Right Icons */}
            <Box className="icon-group" display="flex" alignItems="center" gap={2}>
              <div className="custom-badge" onClick={handleCartOpen}>
                <i className="icon ion-ios-cart"></i>
                <span className="badge-count">3</span>
              </div>
              <i className="icon ion-ios-search"></i>
              <i className="icon ion-ios-menu"></i>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
