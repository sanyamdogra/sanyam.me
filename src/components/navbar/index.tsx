import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IconContainer } from "../shared/icons";
import { Variants } from "framer-motion";
import { DataTheme } from "../../common/types";
import { useRouter } from "next/router";
import { GiSpiderWeb } from "react-icons/gi";
import { NAV_LINKS } from "./constants";
import {
  NavLink,
  NavInitial,
  NavbarBody,
  NavbarInner,
  NavLinks,
  IconWrapper,
  SideBar,
  DummyIcon
} from "./styles";

import MobileNavLinksWrapper from "./mobileNav";
import { SocialLinks } from "../../common/types";

const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
};

const Navbar: React.FC = () => {
  const [dataTheme, setDataTheme] = useState<boolean | undefined>(undefined);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { asPath } = useRouter();

  useEffect(() => {
    const root = window.document.documentElement;
    const value = root.style.getPropertyValue("--initial-data-theme");
    setDataTheme(value === DataTheme.DARK);
  }, []);

  useEffect(() => {
    setShowDrawer(false);
    document.body.style.removeProperty("overflow");
  }, [asPath]);

  const checkColorMode = useCallback(() => {
    if (dataTheme !== undefined) {
      if (dataTheme) {
        document.documentElement.setAttribute("data-theme", DataTheme.DARK);
        window.localStorage.setItem("theme", DataTheme.DARK);
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", DataTheme.LIGHT);
      }
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
    <IoMdMoon aria-label='Enable light mode!' title='Enable light mode!' />
  ) : (
    <FiSun aria-label='Enable dark mode!' title='Enable dark mode!' />
  );
  const checkDataThemeDefined =
    dataTheme === undefined ? <DummyIcon /> : modeIcon;

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
          href={SocialLinks.TWITTER}
          target='_blank'
          rel='noopener noreferrer'
          styleOnHover
        >
          <FaTwitter aria-label='Twitter @sdlord07' title='Twitter @sdlord07' />
        </IconContainer>
      </NavLink>
      <NavLink desktop>
        <IconContainer
          href={SocialLinks.GITHUB}
          target='_blank'
          rel='noopener noreferrer'
          styleOnHover
        >
          <FaGithub
            aria-label='GitHub @sanyamdogra'
            title='GitHub @sanyamdogra'
          />
        </IconContainer>
      </NavLink>
    </>
  );

  const sideBarIcon = showDrawer ? (
    <FiX aria-label='Close sidebar' title='Close sidebar' />
  ) : (
    <FiMenu aria-label='Open sidebar' title='Open sidebar' />
  );

  return (
    <NavbarBody>
      <NavbarInner>
        <Link href='/' passHref>
          <NavInitial>
            <GiSpiderWeb title='Home' />
          </NavInitial>
        </Link>
        <NavLinks>
          <DesktopNavLinksWrapper />
          <NavLink>
            <IconWrapper onClick={handleColorMode}>
              {checkDataThemeDefined}
            </IconWrapper>
          </NavLink>
          <NavLink mobile>
            <IconWrapper onClick={handleSideBar}>{sideBarIcon}</IconWrapper>
          </NavLink>
        </NavLinks>
        <SideBar
          initial='closed'
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
