import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import "../../css/navbar.css";

export function HomeNavbar() {
  const authMember = null;

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
                style={{ height: "36px", objectFit: "contain" }}
              />
            </NavLink>
          </Box>

          {/* Navigation Menu */}
          <Stack direction="row" spacing={4} alignItems="center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home <KeyboardArrowDownRoundedIcon fontSize="small" />
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Shop <KeyboardArrowDownRoundedIcon fontSize="small" />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact Us
            </NavLink>

            {/* Conditional Auth Links */}
            {authMember ? (
              <>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Orders
                </NavLink>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  My Page
                </NavLink>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: "#343434", color: "#f8f8ff" }}
              >
                Login
              </Button>
            )}

            <Box display="flex" alignItems="center" gap={2}>
              <Badge badgeContent={3} color="warning">
                <ShoppingBagOutlinedIcon />
              </Badge>
              <SearchOutlinedIcon />
              <MenuOutlinedIcon />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
