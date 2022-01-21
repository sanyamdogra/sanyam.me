import React, { AnchorHTMLAttributes } from "react";
import { Anchor } from "./styles";

type Props = {};

const CustomLink = (props: AnchorHTMLAttributes<Props>) => {
  return <Anchor target='_blank' rel='noopener noreferrer' {...props} />;
};

export default CustomLink;
