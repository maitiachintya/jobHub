// src/users/services/authApi.ts
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance"; // Use the axiosInstance

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

// Function to call the API for login
const loginUser = async ({ email, password }: LoginData) => {
  const response = await axiosInstance.post("/users/login", {
    email,
    password,
  }); // Update endpoint as needed
  return response.data; // Assuming the response contains { user, token }
};

// Function to call the API for registration
const registerUser = async ({
  firstname,
  lastname,
  email,
  password,
}: RegisterData) => {
  const response = await axiosInstance.post("/users/register", {
    firstname,
    lastname,
    email,
    password,
  }); // Update endpoint as needed
  return response.data; // Assuming the response contains { user, token }
};

// Custom hook to handle login mutation
export const useLogin = () => {
  return useMutation(loginUser);
};

// Custom hook to handle registration mutation
export const useRegister = () => {
  return useMutation(registerUser);
};
