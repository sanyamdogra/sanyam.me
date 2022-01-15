import { createGlobalStyle } from "styled-components";

// Done to fix a wierd prettier bug
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --max-width: 650px;
    --color-primary: rgb(207, 69, 92);
    --color-primary-transparent: rgba(255, 255, 255, 0.93);
    --primary-background: white;
    --primary-background-transparent: rgba(255, 255, 255, 0.8);
    --text-color-primary: rgb(51, 51, 51);
    --text-color-grey: rgb(102 102 102);
    --color-divider: rgba(102, 102, 102, 0.3);
  }
  [data-theme="dark"] {
    --color-primary: #cf455c;
    --primary-background: black;
    --primary-background-transparent: rgba(1, 1, 1, 0.8);
    --text-color-primary: white;
    --color-primary-transparent: rgba(207, 69, 92, 0.95);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    color: var(--text-color-primary);
    background-color: var(--primary-background);
    font-size: 18px;
    line-height: 1.5;
  }
  a {
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    padding-left: 1.625rem;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--text-color-grey);
  }

  .rehype-code-title {
    color: blue;
  }
  /* .yuyu .anchor {
    visibility: hidden;
    position: absolute;
    margin-left: -1em;
    padding-right: 0.5em;
    width: 80%;
    max-width: 700px;
    cursor: pointer;
  }
  .anchor:hover {
    visibility: visible;
  }

  .yuyu .anchor:after {
    content: "#";
  } */
`;
