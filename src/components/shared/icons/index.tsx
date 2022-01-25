import styled, { css } from "styled-components";

export const IconContainer = styled.a<{ styleOnHover?: boolean }>`
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  ${({ styleOnHover }) =>
    styleOnHover
      ? css`
          color: var(--text-color-primary);
          :hover {
            color: var(--color-primary);
          }
        `
      : css`
          color: var(--text-color-primary);
        `}
  & > span {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.7rem;
    line-height: 1rem;
  }
`;
