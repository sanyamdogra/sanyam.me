import styled from "styled-components";

export const Card = styled.a`
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 1.5rem 0;
  text-decoration: none;
`;

export const CardHeading = styled.div`
  font-size: 25px;
  font-weight: 800;

  ${Card}:hover & {
    color: var(--color-primary);
  }
`;

export const CardSummary = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 0;
  font-size: 16px;
`;

export const DateWrapper = styled.div`
  font-size: 14px;
`;

export const ReadMore = styled.div`
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const ArrowWrapper = styled.span`
  line-height: 0;
  font-size: 20px;
  margin-left: 0.5rem;
`;
