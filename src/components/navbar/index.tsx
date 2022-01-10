import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconContainer } from "../shared/icons";
import { motion, Variants } from "framer-motion";
import { DataTheme } from "../../common/types";

const NAV_LINKS = [
  {
    title: "blog",
    to: "/blog",
  },
  { title: "resume", to: "/resume" },
  { title: "about", to: "/about" },
];
const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar: React.FC = () => {
  const [dataTheme, setDataTheme] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const value = root.style.getPropertyValue("--initial-data-theme");
    setDataTheme(value === DataTheme.DARK);
  }, []);

  const checkColorMode = useCallback(() => {
    if (dataTheme) {
      document.documentElement.setAttribute("data-theme", DataTheme.DARK);
      window.localStorage.setItem("theme", DataTheme.DARK);
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", DataTheme.LIGHT);
    }
  }, [dataTheme]);

  useEffect(() => {
    checkColorMode();
  }, [dataTheme, checkColorMode]);

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showDrawer]);

  const handleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setDataTheme(!dataTheme);
  };
  const handleSideBar = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDrawer(!showDrawer);
  };

  const modeIcon: React.ReactNode = dataTheme ? (
    <IoMdMoon aria-label="Enable light mode!" title="Enable light mode!" />
  ) : (
    <FiSun aria-label="Enable dark mode!" title="Enable dark mode!" />
  );

  const DesktopNavLinksWrapper = () => (
    <>
      {NAV_LINKS.map((item, idx) => (
        <NavLink key={idx} arial-label={item.title} desktop>
          <Link href={item.to} passHref>
            {item.title}
          </Link>
        </NavLink>
      ))}
      <NavLink desktop>
        <IconContainer
          href="https://twitter.com/sdlord07"
          target="_blank"
          rel="noopener noreferrer"
          $styledOnHover
        >
          <FaTwitter aria-label="Twitter @sdlord07" title="Twitter @sdlord07" />
        </IconContainer>
      </NavLink>
      <NavLink desktop>
        <IconContainer
          href="https://github.com/sanyamdogra"
          target="_blank"
          rel="noopener noreferrer"
          $styledOnHover
        >
          <FaGithub
            aria-label="Github @sanyamdogra"
            title="Github @sanyamdogra"
          />
        </IconContainer>
      </NavLink>
    </>
  );

  const MobileNavLinksWrapper = () => (
    <>
      {NAV_LINKS.map((item, idx) => (
        <NavLink key={idx} arial-label={item.title} drawer>
          <Link href={item.to} passHref>
            {item.title}
          </Link>
        </NavLink>
      ))}
      <NavLink drawer>
        <IconContainer
          href="https://twitter.com/sdlord07"
          target="_blank"
          rel="noopener noreferrer"
          $styledOnHover
        >
          <FaTwitter aria-label="Twitter @sdlord07" title="Twitter @sdlord07" />
        </IconContainer>
      </NavLink>
      <NavLink drawer>
        <IconContainer
          href="https://github.com/sanyamdogra"
          target="_blank"
          rel="noopener noreferrer"
          $styledOnHover
        >
          <FaGithub
            aria-label="Github @sanyamdogra"
            title="Github @sanyamdogra"
          />
        </IconContainer>
      </NavLink>
    </>
  );

  const sideBarIcon = showDrawer ? (
    <FiX aria-label="Close sidebar" title="Close sidebar" />
  ) : (
    <FiMenu aria-label="Open sidebar" title="Open sidebar" />
  );

  return (
    <NavbarBody>
      <NavbarInner>
        <Link href="/" passHref>
          <NavLogo />
        </Link>
        <NavLinks>
          <DesktopNavLinksWrapper />
          <NavLink>
            <IconWrapper onClick={handleColorMode}>{modeIcon}</IconWrapper>
          </NavLink>
          <NavLink mobile>
            <IconWrapper onClick={handleSideBar}>{sideBarIcon}</IconWrapper>
          </NavLink>
        </NavLinks>
        <SideBar
          initial="closed"
          animate={showDrawer ? "open" : "closed"}
          variants={variants}
        >
          <MobileNavLinksWrapper />
        </SideBar>
      </NavbarInner>
    </NavbarBody>
  );
};

export default Navbar;

const SideBar = styled(motion.ul)`
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

const NavLogo = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
`;

const IconWrapper = styled(IconContainer).attrs({ as: "button" })`
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

const NavbarBody = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--primary-background);
  ${IconWrapper}, ${NavLogo} {
    z-index: 10;
  }
`;

const NavbarInner = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  max-height: 70px;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled.li<{
  desktop?: boolean;
  mobile?: boolean;
  drawer?: boolean;
}>`
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
`;
