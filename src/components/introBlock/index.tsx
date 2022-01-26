import React from "react";
import Image from "next/image";
import { TextHighlight } from "../shared/typography";
import styled from "styled-components";
import {
  IntroBase,
  DetailsWrapper,
  IntroLine,
  AvatarWrapper,
  WorkLine
} from "./styles";

const IntroBlock: React.FC = () => {
  return (
    <IntroBase>
      <DetailsWrapper>
        <IntroLine>
          Hey,
          <br /> I&apos;m <TextHighlight>Sanyam Dogra! </TextHighlight>
        </IntroLine>
        <WorkLine>
          Frontend Engineer <TextHighlight>@ Rapyuta Robotics</TextHighlight>
        </WorkLine>
      </DetailsWrapper>
      <AvatarWrapper>
        <Image
          src={"/static/images/avatar.webp"}
          height={140}
          width={135}
          alt='avatar'
          priority
        />
      </AvatarWrapper>
    </IntroBase>
  );
};

export default IntroBlock;
