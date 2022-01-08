import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconContainer } from "../shared/icons";

interface Props {}

const NAV_LINKS = [
  {
    title: "blog",
    to: "/blog",
  },
  { title: "resume", to: "/resume" },
  { title: "about", to: "/about" },
];

const Navbar: React.FC = (props: Props) => {
  const [dataTheme, setDataTheme] = useState<boolean>(false);

  const checkColorMode = useCallback(() => {
    if (dataTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [dataTheme]);
  useEffect(() => {
    checkColorMode();
  }, [dataTheme, checkColorMode]);

  const handleColorMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setDataTheme(!dataTheme);
  };

  const modeIcon: React.ReactNode = dataTheme ? (
    <IoMdMoon aria-label="Enable light mode!" title="Enable light mode!" />
  ) : (
    <FiSun aria-label="Enable dark mode!" title="Enable dark mode!" />
  );

  const DesktopNavLinksWrapper = () => (
    <>
      {NAV_LINKS.map((item, idx) => (
        <NavLink key={idx} arial-label={item.title}>
          <Link href={item.to} passHref>
            {item.title}
          </Link>
        </NavLink>
      ))}
      <NavLink>
        <IconContainer
          href="https://twitter.com/sdlord07"
          target="_blank"
          rel="noopener noreferrer"
          $styledOnHover
        >
          <FaTwitter aria-label="Twitter @sdlord07" title="Twitter @sdlord07" />
        </IconContainer>
      </NavLink>
      <NavLink>
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

  return (
    <NavbarBody>
      <NavbarInner>
        <Link href="/" passHref>
          <NavLogo />
        </Link>
        <NavLinks>
          <NavLinkDesktop>
            <DesktopNavLinksWrapper />
          </NavLinkDesktop>
          <NavLink>
            <IconWrapper onClick={handleColorMode}>{modeIcon}</IconWrapper>
          </NavLink>
        </NavLinks>
      </NavbarInner>
    </NavbarBody>
  );
};

export default Navbar;

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
`;

const NavbarInner = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  /* max-width: var(--max-width); */
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

const NavLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-left: 1.2rem;
  line-height: 0;
`;

const NavLinkDesktop = styled.li`
  display: none;

  @media only screen and (min-width: 764px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    margin-left: 1.2rem;
    line-height: 0;
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
