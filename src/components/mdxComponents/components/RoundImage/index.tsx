import React from "react";
import Image, { ImageProps } from "next/image";
import { StyledImage } from "./styles";

const RoundedImage = (props: ImageProps) => {
  return (
    <StyledImage>
      <Image alt={props.alt} {...props} />
    </StyledImage>
  );
};

export default RoundedImage;
