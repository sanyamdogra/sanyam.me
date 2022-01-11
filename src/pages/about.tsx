import type { NextPage } from "next";
import { DocumentHead } from "../components/shared/documentHead";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../components/shared/typography";

const About: NextPage = () => {
  return (
    <>
      <DocumentHead pageTitle="About me" />
      <ContentCenter>
        <PageTitle>
          About <TextHighlight>me?</TextHighlight>
        </PageTitle>
      </ContentCenter>
      <ContentCenter>
        <p>
          <i>&quot; I don&apos;t know &quot;</i>
        </p>
      </ContentCenter>
      <p>Come back later, in the meantime I&apos;ll find about myself.</p>
    </>
  );
};

export default About;
