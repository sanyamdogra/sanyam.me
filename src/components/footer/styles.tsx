import styled from "styled-components";

export const FooterBase = styled.footer`
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

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-align: center;
`;
export const VercelWrapper = styled.span`
  font-size: 18px;
  margin: 0 0.2rem;
  line-height: 0;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-divider);
  margin-top: 2rem;
`;