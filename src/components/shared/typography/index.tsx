import styled from "styled-components";

export const TextHighlight = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

export const PageTitle = styled.h1`
  font-size: 50px;
  font-family: "Ubuntu", "Inter";
  font-weight: 800;
  margin: 0;
  margin-top: 2rem;

  @media only screen and (max-width: 764px) {
    font-size: 40px;
  }
`;
