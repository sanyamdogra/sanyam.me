import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Navbar from "../navbar";

const LayoutBase = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutBase>
      <Navbar />
      {children}
      <Footer />
    </LayoutBase>
  );
};

export default Layout;
