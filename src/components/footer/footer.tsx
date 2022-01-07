import React from "react";
import styled from "styled-components";
import { IoLogoVercel } from "react-icons/io5";

interface Props {}

const Footer: React.FC = (props: Props) => {
  return (
    <FooterBase>
      <FooterContent>
        Made with NextJS, TypeScript and styled-components.
      </FooterContent>
      <FooterContent>
        Powered by Vercel
        <IconWrapper>
          <IoLogoVercel />
        </IconWrapper>
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
  line-height: 0;
  margin: 0.5rem 0;
  font-size: 14px;
`;
const IconWrapper = styled.a`
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  margin: 0 0.2rem;
`;
