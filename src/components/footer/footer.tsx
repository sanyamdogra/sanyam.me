import React from "react";
import styled from "styled-components";

interface Props {}

const Footer: React.FC = (props: Props) => {
  return (
    <FooterBase>Made with NextJS, TypeScript and styled-components.</FooterBase>
  );
};

export default Footer;

const FooterBase = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
