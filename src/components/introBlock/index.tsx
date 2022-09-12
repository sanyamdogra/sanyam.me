import React from "react";
import Image from "next/image";
import { TextHighlight } from "../shared/typography";
import {
  IntroBase,
  DetailsWrapper,
  IntroLine,
  AvatarWrapper,
  WorkLine
} from "./styles";
import { COMPANY_NAME, COMPANY_POSITION } from "../../common/constants";

const IntroBlock: React.FC = () => {
  return (
    <IntroBase>
      <DetailsWrapper>
        <IntroLine>
          Hey,
          <br /> I&apos;m <TextHighlight>Sanyam Dogra! </TextHighlight>
        </IntroLine>
        <WorkLine>
          {COMPANY_POSITION} <TextHighlight>@ {COMPANY_NAME}</TextHighlight>
        </WorkLine>
      </DetailsWrapper>
      <AvatarWrapper>
        <Image
          src={"/static/images/avatar.webp"}
          height={256 / 2.2}
          width={256 / 2.2}
          alt='Avatar Sanyam Dogra'
          priority
        />
      </AvatarWrapper>
    </IntroBase>
  );
};

export default IntroBlock;
