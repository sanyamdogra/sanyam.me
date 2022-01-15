import styled from "styled-components";

export const LayoutBase = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);

  @media only screen and (max-width: 764px) {
    margin: 0 1rem;
  }
`;
