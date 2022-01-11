import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Navbar from "../navbar";

const LayoutBase = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);

  @media only screen and (max-width: 764px) {
    margin: 0 1rem;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutBase>
        {children}
        <Footer />
      </LayoutBase>
    </>
  );
};

export default Layout;
