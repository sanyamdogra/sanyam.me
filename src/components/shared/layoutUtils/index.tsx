import React from "react";
import styled, { css } from "styled-components";

export const ContentCenter = styled.div<{
  flexCol?: boolean;
  alignCenter?: boolean;
}>`
  display: flex;
  justify-content: center;
  ${({ flexCol }) =>
    flexCol &&
    css`
      flex-direction: column;
    `}

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
`;

export const ContentLeft = styled.div`
  display: flex;
  justify-content: left;
`;
