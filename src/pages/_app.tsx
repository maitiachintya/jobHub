// pages/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../users/store/authSlice"; // Default import for store
import JobPlatformNavbar from "../layout/Header"; // Navbar included here for all pages
import "../app/globals.css"; // Corrected path to global.css

// Import React Query Client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
   {/* Navbar appears on every page */}
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
};

export default MyApp;
