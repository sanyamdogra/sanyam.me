import React from "react";
import RoundImage from "./components/RoundImage";
import CustomLink from "./components/customLink";
import { TextHighlight } from "../shared/typography";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaBehance
} from "react-icons/fa";

const MDXComponents = {
  Image: RoundImage,
  a: CustomLink,
  TextHighlight,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaBehance
};

export default MDXComponents;
