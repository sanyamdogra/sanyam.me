import { DocumentHead } from "../components/shared/documentHead";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ContentCenter } from "../components/shared/layoutUtils";
import { TextHighlight, PageTitle } from "../components/shared/typography";
import { allMiscs } from ".contentlayer/data";
import { Misc } from ".contentlayer/types";
import MDXComponents from "../components/mdxComponents";
import { LayoutWrapper } from "../styles/layout";

interface Props {
  post: Misc;
}

const About: React.FC<Props> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <DocumentHead pageTitle='About me' />
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
      <LayoutWrapper className='content about'>
        <Component
          components={
            {
              ...MDXComponents
            } as any
          }
        />
      </LayoutWrapper>
    </>
  );
};

export async function getStaticProps() {
  const post = allMiscs.find((misc) => misc.slug === "about");
  return { props: { post } };
}

export default About;
