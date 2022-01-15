import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar";
import { LayoutBase } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutBase>{children}</LayoutBase>
      <Footer />
    </>
  );
};

export default Layout;
