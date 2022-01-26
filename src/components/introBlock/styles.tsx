import styled from "styled-components";

export const AvatarWrapper = styled.div`
  img {
    border: 2px solid var(--color-primary) !important; //To override inline styles
    border-radius: 50%;
    z-index: 0;

    @media only screen and (max-width: 764px) {
      height: auto !important; //To override inline styles
      width: 100px !important; //To override inline styles
    }
  }
`;

export const IntroLine = styled.h1`
  font-family: "Ubuntu";
  margin: 0;

  @media only screen and (max-width: 764px) {
    font-size: 28px;
  }
`;

export const DetailsWrapper = styled.div``;

export const IntroBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const WorkLine = styled.div`
  font-weight: 700;
  margin: 1rem 0;

  @media only screen and (max-width: 764px) {
    font-size: 14px;
  }
`;
