import React from "react";
import { IoLogoVercel } from "react-icons/io5";

import Spotify from "../spotify";
import { ContentCenter } from "../shared/layoutUtils";
import {
  FooterBase,
  Divider,
  FooterContent,
  VercelWrapper,
  VerticalDivider
} from "./styles";
import { POWERED_BY } from "../../common/constants";

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
        {POWERED_BY}
      </FooterContent>
    </FooterBase>
  );
};

export default Footer;
