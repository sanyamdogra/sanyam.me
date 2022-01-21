import React from "react";
import styled from "styled-components";
import Spotify from "../spotify";
import { IoLogoVercel } from "react-icons/io5";
import { ContentCenter } from "../shared/layoutUtils";

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

const FooterBase = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem auto;
  width: 100%;
  max-width: var(--max-width);

  @media only screen and (max-width: 764px) {
    padding: 0 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
`;
const VercelWrapper = styled.span`
  font-size: 18px;
  margin: 0 0.2rem;
  line-height: 0;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-divider);
  margin-top: 2rem;
`;
