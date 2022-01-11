import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";
import type { Blog } from ".contentlayer/types";
import { DocumentHead } from "../../components/shared/documentHead";
import { PageTitle } from "../../components/shared/typography";

interface Props {
  post: Blog;
}

export const Post: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <DocumentHead pageTitle={post.title} description={post.summary} />
      <PageTitle>{post.title}</PageTitle>
      <Component
        components={
          {
            // ...components,
          } as any
        }
      />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: Record<string, string>;
}) {
  //TODO - type params with {slug: string}
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
