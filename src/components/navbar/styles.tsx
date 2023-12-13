import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IconContainer } from "../shared/icons";
import { NavLinkVariant } from "./types";

export const NavInitial = styled.div`
  font-weight: 900;
  font-size: 30px;
  color: var(--color-primary);
  line-height: 0;
`;

export const SideBar = styled(motion.ul)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: var(--color-primary-transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.2;

  @media only screen and (min-width: 764px) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background-color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
`;

export const IconWrapper = styled(IconContainer).attrs({ as: "button" })`
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

export const NavbarBody = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--primary-background-transparent);

  ${IconWrapper}, ${NavLogo} {
    z-index: 10;
  }

  @media only screen and (max-width: 764px) {
    padding: 0 1rem;
  }
`;

export const NavbarInner = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  max-height: 70px;
  max-width: var(--max-width);
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLink = styled("li")<NavLinkVariant>`
  display: ${(props) => (props.desktop ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-left: 1.2rem;
  ${(props) =>
    props.drawer &&
    css`
      margin-top: 1rem;
      font-size: 24px;
      font-weight: 700;
    `};

  @media only screen and (min-width: 764px) {
    display: ${(props) => (props.mobile ? "none" : "flex")};
  }

  a {
    text-decoration: none;
  }
`;

export const DummyIcon = styled.span`
  width: 25px;
`;
