"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import the tick icon
import Link from "next/link"; // Import Link for navigation
import Wrapper from "../../layout/wrapper";
import { useDispatch } from "react-redux";
import { registerFailure, registerSuccess } from "../../users/store/authSlice";
import { useRouter } from "next/router";
import axios from "axios"; // Import axios for API calls
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Base URL for your local JSON server
const axiosInstance = axios.create({
  baseURL: "http://localhost:2020",
});

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  }>({});

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // State for password visibility toggle

  const dispatch = useDispatch();
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email in lowercase.";
    return "";
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password) return "Password is required.";
    if (!passwordRegex.test(password))
      return "Password must contain at least 8 characters, one uppercase letter, and one special character.";
    return "";
  };

  const validateFields = () => {
    const firstNameError = formData.firstName ? "" : "First name is required.";
    const lastNameError = formData.lastName ? "" : "Last name is required.";
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      password: passwordError,
    });

    return !(firstNameError || lastNameError || emailError || passwordError);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        // Prepare user data
        const userData = {
          id: Date.now().toString(), // Generate unique ID
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
        };

        // Use axios instance to send POST request to JSON server
        const response = await axiosInstance.post("/users", userData);

        console.log("API Response:", response);

        if (response.status === 201) {
          // Dispatch success action
          dispatch(registerSuccess(userData));

          console.log("User registered successfully:", response.data);

          // Open success snackbar
          setOpenSnackbar(true);

          // Redirect to login page after successful registration
          setTimeout(() => router.push("/login"), 2000); // Redirect after 2 seconds
        }
      } catch (error: any) {
        // Dispatch failure action
        dispatch(registerFailure("Registration failed"));

        console.error("Registration error:", error);

        // Handle API error response
        setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
        setOpenErrorSnackbar(true);
      }
    }
  };

  return (
    <Wrapper>
      <Box
        sx={{
          backgroundImage: `url('https://img.freepik.com/free-photo/flat-lay-office-desk-assortment-with-copy-space_23-2148707962.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "500px" },
            padding: { xs: 3, sm: 5 },
            borderRadius: 4,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            marginRight: { xs: 0, sm: "5%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 2,
              color: "#2C3E50",
            }}
          >
            Create Your Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="email"
              label="Email Address"
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}  // Toggle password visibility
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ marginBottom: 2 }}
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={handleClickShowPassword}
                    sx={{ padding: 0 }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </Button>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                padding: "12px",
                textTransform: "none",
                marginBottom: 2,
              }}
            >
              Register
            </Button>
          </Box>

          {/* Link to Login Page */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#2C3E50",
              marginTop: 2,
            }}
          >
            Already have an account?{" "}
            <Link href="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
              Click here to login
            </Link>
          </Typography>
        </Paper>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
          icon={<CheckCircleIcon />}
        >
          Registration successful! Redirecting to login...
        </Alert>
      </Snackbar>

      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenErrorSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenErrorSnackbar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default RegistrationPage;
