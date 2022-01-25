import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";
import { DocumentHead } from "../../components/shared/documentHead";
import { PageTitle, TextHighlight } from "../../components/shared/typography";
import styled from "styled-components";
import MDXComponents from "../../components/mdxComponents";
import format from "date-fns/format";
import { DATE_FORMAT } from "../../common/constants";
import { LayoutWrapper } from "../../styles/layout";

interface Props {
  post: Blog;
}

export const Post: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  const formattedDate = format(new Date(post.publishedAt), DATE_FORMAT);

  return (
    <>
      <DocumentHead pageTitle={post.title} description={post.summary} />
      <PageTitle>{post.title}</PageTitle>
      <BlogDetails>
        <TextHighlight>{formattedDate}</TextHighlight>
        <TextHighlight>{post.readingTime.text}</TextHighlight>
      </BlogDetails>
      <LayoutWrapper className='content'>
        <Component
          components={
            {
              ...MDXComponents
            } as any
          }
        />
      </LayoutWrapper>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({
  params
}: {
  params: Record<string, string>;
}) {
  //TODO - type params with {slug: string}
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}

const BlogDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 1rem;
`;
