import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";
import { DocumentHead } from "../../components/shared/documentHead";
import { PageTitle, TextHighlight } from "../../components/shared/typography";
import styled from "styled-components";
import MDXComponents from "../../components/mdxComponents";

interface Props {
  post: Blog;
}

export const Post: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <DocumentHead pageTitle={post.title} description={post.summary} />
      <PageTitle>{post.title}</PageTitle>
      <TextHighlight>{post.publishedAt}</TextHighlight>
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

const LayoutWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: auto;

  h3,
  h2 {
    color: var(--color-primary);
  }
`;
