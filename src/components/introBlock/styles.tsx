import styled from "styled-components";

export const AvatarWrapper = styled.div`
  @media only screen and (max-width: 764px) {
    height: auto;
    width: 80px;
  }

  img {
    z-index: 0;
    border-radius: 50%;
    border: 3px solid var(--text-color-primary) !important;
    /* background: linear-gradient(
      90deg,
      rgba(207, 69, 92, 1) 40%,
      rgba(0, 151, 255, 1) 100%
    ) !important;
    background-origin: border-box !important; */
  }
`;

export const IntroLine = styled.h1`
  font-family: "Ubuntu", "Inter";
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
