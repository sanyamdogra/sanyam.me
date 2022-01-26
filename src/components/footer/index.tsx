import React from "react";

import Spotify from "../spotify";
import { IoLogoVercel } from "react-icons/io5";
import { ContentCenter } from "../shared/layoutUtils";
import {
  FooterBase,
  Divider,
  FooterContent,
  VercelWrapper,
  VerticalDivider
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <ContentCenter>
        <Divider />
      </ContentCenter>
      <Spotify />
      <FooterContent>
        <VercelWrapper>
          <IoLogoVercel />
        </VercelWrapper>
        <VerticalDivider />
        Powered by Vercel
      </FooterContent>
    </FooterBase>
  );
};

export default Footer;
