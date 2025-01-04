import React from "react";
import Header from "./Header";  // Assuming you have the Header component in this path
import Footer from "./Footer";  // Assuming you have the Footer component in this path

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
