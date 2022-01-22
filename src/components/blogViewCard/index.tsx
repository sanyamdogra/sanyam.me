import React from "react";
import Link from "next/link";
import format from "date-fns/format";
import { BsArrowRight } from "react-icons/bs";
import {
  Card,
  CardHeading,
  DateWrapper,
  CardSummary,
  ArrowWrapper,
  ReadMore
} from "./styles";
import { DATE_FORMAT } from "../../common/constants";

interface Props {
  title: string;
  href: string;
  date: string;
  summary: string;
}

const BlogViewCard: React.FC<Props> = ({ title, href, date, summary }) => {
  const formattedDate = format(new Date(date), DATE_FORMAT);

  return (
    <Link href={`/blog/${href}/`} passHref>
      <Card>
        <CardHeading>{title}</CardHeading>
        <DateWrapper>
          <i>{formattedDate}</i>
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
