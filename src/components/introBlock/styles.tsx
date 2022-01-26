import styled from "styled-components";

export const AvatarWrapper = styled.div`
  @media only screen and (max-width: 764px) {
    height: auto;
    width: 90px;
  }

  img {
    z-index: 0;
    border: 0.25rem solid transparent !important; //To ovveride inline styles
    border-radius: 50%;
    background-image: linear-gradient(
      to right,
      rgba(255, 215, 0, 1),
      rgb(207, 69, 92)
    );
    background-origin: border-box !important; //To ovveride inline styles
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
