import React from "react";
import { NavLink } from "../styles";
import { IconContainer } from "../../shared/icons";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SocialLinks } from "../../../common/types";

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
        href={SocialLinks.TWITTER}
        target='_blank'
        rel='noopener noreferrer'
        $styledOnHover
      >
        <FaTwitter aria-label='Twitter @sdlord07' title='Twitter @sdlord07' />
      </IconContainer>
    </NavLink>
    <NavLink drawer>
      <IconContainer
        href={SocialLinks.GITHUB}
        target='_blank'
        rel='noopener noreferrer'
        $styledOnHover
      >
        <FaGithub
          aria-label='Github @sanyamdogra'
          title='Github @sanyamdogra'
        />
      </IconContainer>
    </NavLink>
  </>
);

export default MobileNavLinksWrapper;
