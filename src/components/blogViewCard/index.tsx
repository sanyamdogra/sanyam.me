import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  Card,
  CardHeading,
  DateWrapper,
  CardSummary,
  ArrowWrapper,
  ReadMore
} from "./styles";

interface Props {
  title: string;
  href: string;
  date: string;
  summary: string;
}

const BlogViewCard: React.FC<Props> = ({ title, href, date, summary }) => {
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

export default BlogViewCard;
