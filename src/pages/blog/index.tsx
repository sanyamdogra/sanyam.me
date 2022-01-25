import React from "react";
import { DocumentHead } from "../../components/shared/documentHead";
import { ContentCenter } from "../../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../../components/shared/typography";
import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import { BlogView } from "../../common/types";
import BlogViewCard from "../../components/blogViewCard";
import styled from "styled-components";

export async function getStaticProps() {
  const blogs = allBlogs.map((blog) =>
    pick(blog, ["title", "slug", "publishedAt", "summary", "published"])
  );
  return { props: { blogs } };
}
interface Props {
  blogs: BlogView[];
}
const Blogs: React.FC<Props> = ({ blogs }) => {
  const filteredBlogs = blogs.filter((blog) => blog.published);

  return (
    <>
      <DocumentHead pageTitle='Blog' />
      <ContentCenter>
        <PageTitle>
          Not a <TextHighlight>Blog!</TextHighlight>
        </PageTitle>
      </ContentCenter>
      <ContentCenter>
        <p>
          &quot;<i> Well, that&apos;s what they say </i>🤦‍♂️&quot;
        </p>
      </ContentCenter>
      <BlogViewWrapper>
        {filteredBlogs
          ?.map((b, idx) => (
            <BlogViewCard
              title={b.title}
              href={b.slug}
              key={idx}
              date={b.publishedAt}
              summary={b.summary}
            />
          ))
          .sort(
            (a, b) =>
              Number(new Date(b.props.date)) - Number(new Date(a.props.date))
          )}
      </BlogViewWrapper>
    </>
  );
};

export default Blogs;

const BlogViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
