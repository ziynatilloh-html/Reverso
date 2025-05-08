import React, { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/auth.css";
export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    memberNick: "",
    memberPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/api/member/login", formData);
      console.log(res.data);
      navigate("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <Box className="auth-form">
      <Typography variant="h4" mb={3}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            name="memberNick"
            label="Nickname or Email"
            variant="outlined"
            fullWidth
            value={formData.memberNick}
            onChange={handleChange}
            required
          />
          <TextField
            name="memberPassword"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.memberPassword}
            onChange={handleChange}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="auth-button"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => (window.location.href = "/auth/google")} // update your Google route here
          >
            Login with Google
          </Button>
        </Stack>
      </form>
      <Typography mt={2}>
        Don't have an account? <a href="/signup">Register here</a>
      </Typography>
    </Box>
  );
}
