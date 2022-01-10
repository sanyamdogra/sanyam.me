import type { NextPage } from "next";
import styled from "styled-components";
import { DocumentHead } from "../../components/shared/documentHead";
import { ContentCenter } from "../../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../../components/shared/typography";

const Blog: NextPage = () => {
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
      <p>Work in progress! Come back after some time</p>
    </>
  );
};

export default Blog;
