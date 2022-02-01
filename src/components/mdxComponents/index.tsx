import React from "react";
import RoundImage from "./components/RoundImage";
import CustomLink from "./components/customLink";
import { TextHighlight } from "../shared/typography";
import { FaBehance } from "react-icons/fa";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiDribbble,
  FiTwitter
} from "react-icons/fi";

const MDXComponents = {
  Image: RoundImage,
  a: CustomLink,
  TextHighlight,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiDribbble,
  FiTwitter,
  FaBehance
};

export default MDXComponents;
