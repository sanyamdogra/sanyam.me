import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { ContentCenter } from "../components/shared/layoutUtils";

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
          Not a <ColorTitle>Blog!</ColorTitle>
        </MainTitle>
      </ContentCenter>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
      <IntroBlock>
        I am Frontend Engineer currently working at <b>Rapyuta Robotics</b>. I
        am Frontend Engineer currently working at Rapyuta Robotics.I am Frontend
        Engineer currently working at Rapyuta Robotics.I am Frontend Engineer
        currently working at Rapyuta Robotics.I am Frontend Engineer currently
        working at Rapyuta Robotics.
      </IntroBlock>
    </>
  );
};

export default Home;

const MainTitle = styled.h1`
  font-size: 70px;
  font-family: "Ubuntu";
`;

const IntroBlock = styled.div`
  margin: 5rem 0;
`;

const ColorTitle = styled.span`
  font-size: 70px;
  color: var(--color-primary);
`;
