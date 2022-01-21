import styled from "styled-components";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DocumentHead } from "../components/shared/documentHead";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../components/shared/typography";
import { allMiscs } from ".contentlayer/data";
import { Misc } from ".contentlayer/types";
import MDXComponents from "../components/mdxComponents";

interface Props {
  post: Misc;
}

const Home: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <DocumentHead pageTitle='Base' />
      <ContentCenter>
        <PageTitle>
          Hey, I&apos;m <TextHighlight>Sanyam Dogra!</TextHighlight>
        </PageTitle>
      </ContentCenter>
      <ContentCenter>
        <WorkLine>
          Frontend Engineer <TextHighlight>@ Rapyuta Robotics</TextHighlight>
        </WorkLine>
      </ContentCenter>
      <IntroBlock>
        <Component
          components={
            {
              ...MDXComponents
            } as any
          }
        />
      </IntroBlock>
    </>
  );
};

export async function getStaticProps() {
  const post = allMiscs.find((misc) => misc.slug === "interests");
  return { props: { post } };
}

export default Home;

const IntroBlock = styled.div`
  margin-top: 3rem;
`;

const WorkLine = styled.div`
  font-weight: 700;
`;
