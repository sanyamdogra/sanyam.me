import React from "react";
import styled from "styled-components";
import { IoLogoVercel } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <FooterBase>
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

const FooterBase = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
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
