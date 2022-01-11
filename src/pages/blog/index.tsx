import React from "react";
import { DocumentHead } from "../../components/shared/documentHead";
import { ContentCenter } from "../../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../../components/shared/typography";
import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import { BlogView } from "../../common/types";
import { BlogViewCard } from "../../components/blogViewCard";
import styled from "styled-components";

export async function getStaticProps() {
  const blogs = allBlogs.map((blog) =>
    pick(blog, ["title", "slug", "publishedAt"])
  );
  return { props: { blogs } };
}
interface Props {
  blogs: BlogView[];
}
const Blogs: React.FC<Props> = ({ blogs }) => {
  return (
    <>
      <DocumentHead pageTitle="Blog" />
      <ContentCenter>
        <PageTitle>
          Not a <TextHighlight>Blog!</TextHighlight>
        </PageTitle>
      </ContentCenter>
      <ContentCenter>
        <p>
          <i>&quot; These are stories &quot;</i>
        </p>
      </ContentCenter>
      <BlogViewWrapper>
        {blogs?.map((b, idx) => (
          <BlogViewCard
            title={b.title}
            href={b.slug}
            key={idx}
            date={b.publishedAt}
          />
        ))}
      </BlogViewWrapper>
    </>
  );
};

export default Blogs;

const BlogViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;