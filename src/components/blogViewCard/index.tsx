import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  title: string;
  href: string;
  date: string;
}

export const BlogViewCard: React.FC<Props> = ({ title, href, date }) => {
  return (
    <Card>
      <Link href={`/blog/${href}/`}>
        <a>
          {title} - {date}
        </a>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  cursor: pointer;
  margin: 0.5rem 0;
`;
