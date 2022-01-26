import styled from "styled-components";
import { useMDXComponent } from "next-contentlayer/hooks";
import { DocumentHead } from "../components/shared/documentHead";
import { allMiscs } from ".contentlayer/data";
import { Misc } from ".contentlayer/types";
import MDXComponents from "../components/mdxComponents";
import IntroBlock from "../components/introBlock";

interface Props {
  post: Misc;
}

const Home: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <DocumentHead pageTitle='Base' />
      <IntroBlock />
      <InterestsBlock className='content'>
        <Component
          components={
            {
              ...MDXComponents
            } as any
          }
        />
      </InterestsBlock>
    </>
  );
};

export async function getStaticProps() {
  const post = allMiscs.find((misc) => misc.slug === "interests");
  return { props: { post } };
}

export default Home;

const InterestsBlock = styled.div`
  margin-top: 2rem;
`;
