import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  title: string;
  href: string;
  date: string;
  summary: string;
}

export const BlogViewCard: React.FC<Props> = ({
  title,
  href,
  date,
  summary
}) => {
  return (
    <Link href={`/blog/${href}/`} passHref>
      <Card>
        <CardHeading>{title}</CardHeading>
        <DateWrapper>
          <i>{date}</i>
        </DateWrapper>
        <CardSummary>{summary}</CardSummary>
        <ReadMore>
          Read more
          <ArrowWrapper>
            <BsArrowRight />
          </ArrowWrapper>
        </ReadMore>
      </Card>
    </Link>
  );
};
const Card = styled.a`
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 10px;
  padding: 1.5rem;
  text-decoration: none;
`;

const CardHeading = styled.div`
  font-size: 25px;
  font-weight: 800;

  ${Card}:hover & {
    color: var(--color-primary);
  }
`;

const CardSummary = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 0;
  font-size: 16px;
`;

const DateWrapper = styled.div`
  font-size: 14px;
`;

const ReadMore = styled.div`
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const ArrowWrapper = styled.span`
  line-height: 0;
  font-size: 20px;
  margin-left: 0.5rem;
`;
