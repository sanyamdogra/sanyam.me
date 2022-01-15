import type { NextPage } from "next";
import styled from "styled-components";
import { DocumentHead } from "../components/shared/documentHead";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../components/shared/typography";

const Home: NextPage = () => {
  return (
    <>
      <DocumentHead pageTitle='Base' />
      <ContentCenter>
        <PageTitle>
          Hey, I&apos;m <TextHighlight>Sanyam Dogra!</TextHighlight>
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
      {/* <p>
        I have worked with the <TextHighlight>Developers Italia</TextHighlight>,
        an Italian Govt Org under the GSoC&apos;19, Zubi and HopQ.
      </p> */}
      {/* <div>
        I am curently interested in these projects/langs
        <ul>
          <li> NextJS</li>
          <li> Rome </li>
          <li>Rust</li>
        </ul>
      </div>
      <div>
        I love open-source ❤️ and have contributed to these projects.
        <ul>
          <li> design-react-kit</li>
          <li> express-rate-limit </li>
          <li>Accord project</li>
        </ul>
      </div> */}
    </>
  );
};

export default Home;

const IntroBlock = styled.p`
  margin: 5rem 0;
`;
