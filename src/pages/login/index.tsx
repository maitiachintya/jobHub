import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { loginFailure, loginSuccess } from "../../users/store/authSlice";
import Wrapper from "../../layout/wrapper";

// Define baseURL and endpoints for API requests
export const baseURL = "http://localhost:2020";

export const endpoints = {
  users: "/users", // Endpoint for user-related operations
};

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email in lowercase.";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required.";
    return "";
  };

  const validateFields = () => {
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({ email: emailError, password: passwordError });
    return !(emailError || passwordError);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      try {
        // Fetch users from the API (using the baseURL and endpoints)
        const response = await axios.get(`${baseURL}${endpoints.users}`);
        const users = response.data;

        // Check if the provided credentials match any user
        const user = users.find(
          (u: any) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          const token = "mockedToken"; // Token can be generated or fetched from an API
          localStorage.setItem("authToken", token); // Store the token
          localStorage.setItem("user", JSON.stringify(user)); // Store user data
          dispatch(loginSuccess({ user, token }));
          setOpenSnackbar(true);

          // Redirect to the dashboard
          setTimeout(() => router.push("/dashboard"), 2000);
        } else {
          setErrorMessage("Invalid credentials. Please try again.");
          setOpenErrorSnackbar(true);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorMessage(error.response?.data.message || "Login failed. Please try again.");
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
        dispatch(loginFailure("Login failed"));
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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 3,
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "500px" },
            padding: 4,
            borderRadius: 4,
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography variant="h4" textAlign="center" color="#2C3E50" fontWeight="bold">
            Welcome Back!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} mt={3}>
            <TextField
              name="email"
              label="Email Address"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ marginBottom: 2 }}
              InputProps={{
                endAdornment: (
                  <Button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", fontSize: "16px", padding: "12px" }}
            >
              Log In
            </Button>
            <Divider sx={{ marginY: 3 }}>OR</Divider>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  fullWidth
                  sx={{ color: "#4285F4", borderColor: "#4285F4" }}
                >
                  Log In with Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  fullWidth
                  sx={{ color: "#0A66C2", borderColor: "#0A66C2" }}
                >
                  Log In with LinkedIn
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography textAlign="center" mt={3}>
            Don’t have an account?{" "}
            <Link href="/registration">
              <Typography component="span" sx={{ color: "#2980B9" }}>
                Register
              </Typography>
            </Link>
          </Typography>
        </Paper>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Login successful!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenErrorSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenErrorSnackbar(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default LoginPage;
