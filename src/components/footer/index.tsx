import React from "react";

import Spotify from "../spotify";
import { IoLogoVercel } from "react-icons/io5";
import { ContentCenter } from "../shared/layoutUtils";
import { FooterBase, Divider, FooterContent, VercelWrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <ContentCenter>
        <Divider />
      </ContentCenter>
      <Spotify />
      <FooterContent>
        Made with NextJS, TypeScript and styled-components.
      </FooterContent>
      <FooterContent>
        Powered by Vercel
        <VercelWrapper>
          <IoLogoVercel />
        </VercelWrapper>
      </FooterContent>
    </FooterBase>
  );
};

export default Footer;
