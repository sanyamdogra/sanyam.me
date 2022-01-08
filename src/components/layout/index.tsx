import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import Navbar from "../navbar";
import Spotify from "../spotify";

const LayoutBase = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);

  @media only screen and (max-width: 764px) {
    margin: 0 2rem;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutBase>
      <Navbar />
      {children}
      <Spotify />
      <Footer />
    </LayoutBase>
  );
};

export default Layout;
