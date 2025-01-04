import axios from "axios";
import { baseURL } from "../../api/endPoints";

const axiosInstance = axios.create({
  baseURL, // Should be http://localhost:2020 as per your setup
});

// Interceptors (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add custom headers here if needed
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
