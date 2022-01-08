import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight } from "../components/shared/typography";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog: Sanyam Dogra</title>
        <meta name="description" content="Personal blog of Sanyam Dogra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentCenter>
        <MainTitle>
          Hey, I am <TextHighlight>Sanyam Dogra!</TextHighlight>
        </MainTitle>
      </ContentCenter>
      <ContentCenter>
        <p>
          <i>&quot; I make and break front-ends. &quot;</i>
        </p>
      </ContentCenter>
      <p>
        I am currently working as a Frontend Engineer at
        <TextHighlight> Rapyuta Robotics</TextHighlight>. I love building
        products using React & TypeScript. I like The Weeknd, Linkin Park
        <i>(yeah music in general)</i>. I&apos;ll be honest with you, I needed
        an excuse to get my hands on Next JS, TypeScript and styled-components,
        that&apos;s why I revamped this page and also due to my sudden urge to
        write blogs :)
      </p>
    </>
  );
};

export default Home;

const MainTitle = styled.h1`
  font-size: 50px;
  font-family: Ubuntu, Inter;
  font-weight: 800;
  @media only screen and (max-width: 764px) {
    font-size: 40px;
  }
`;

const IntroBlock = styled.p`
  margin: 5rem 0;
`;
