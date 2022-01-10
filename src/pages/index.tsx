import type { NextPage } from "next";
import styled from "styled-components";
import { DocumentHead } from "../components/shared/documentHead";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../components/shared/typography";

const Home: NextPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Base" />
      <ContentCenter>
        <PageTitle>
          Hey, I am <TextHighlight>Sanyam Dogra!</TextHighlight>
        </PageTitle>
      </ContentCenter>
      <ContentCenter>
        <p>
          <i>&quot; I make and break front-ends. &quot;</i>
        </p>
      </ContentCenter>
      <p>
        I am currently working as a Frontend Engineer at
        <TextHighlight> Rapyuta Robotics</TextHighlight>. I love building
        products using React + TypeScript. I like The Weeknd, Linkin Park
        <i>(yeah music in general)</i>. I&apos;ll be honest with you, I needed
        an excuse to get my hands on Next JS, TypeScript and styled-components,
        that&apos;s why I revamped this page and also due to my sudden urge to
        write blogs :)
      </p>
    </>
  );
};

export default Home;

const IntroBlock = styled.p`
  margin: 5rem 0;
`;
