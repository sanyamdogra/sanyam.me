import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import { LayoutBase } from "./styles";

const Footer = dynamic(() => import("../footer"));

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
