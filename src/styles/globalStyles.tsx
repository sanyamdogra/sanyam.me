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
    --text-color-grey: rgb(36, 41, 47);
    --color-divider: rgba(102, 102, 102, 0.3);
    --code-bg: #f5f5f6;
    --code-block-red: rgb(207, 34, 46);
    --code-block-blue: rgb(10, 48, 105);
    --code-block-yellow: rgb(149, 56, 0);
    --code-block-green: rgb(17, 99, 41);
    --color-block-quote: #e5e7eb;
  }
  [data-theme="dark"] {
    --color-primary: rgb(207, 69, 92);
    --primary-background: black;
    --primary-background-transparent: rgba(1, 1, 1, 0.8);
    --text-color-primary: white;
    --text-color-grey: rgb(201, 209, 217);
    --color-primary-transparent: rgba(207, 69, 92, 0.95);
    --code-bg: rgba(17, 17, 17, 1);
    --code-block-red: rgb(255, 123, 114);
    --code-block-blue: rgb(121, 192, 255);
    --code-block-yellow: rgb(255, 166, 87);
    --code-block-green: rgb(126, 231, 135);
    --color-block-quote: #333;
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
    scroll-behavior: smooth;
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

  pre {
    margin: 0;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--text-color-grey);
  }

  .rehype-code-title {
    color: var(--color-primary);
  }

  .content pre {
    background-color: var(--code-bg);
    border-radius: 5px;
    overflow-x: auto;
    max-width: var(--max-width);
    padding: 1rem;
  }

  pre::-webkit-scrollbar {
    display: none;
  }

  pre {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .content {
    blockquote {
      border-left: 0.25rem solid var(--color-block-quote);
      margin: 0;
      padding-left: 1rem;
      font-style: italic;
      font-size: 16px;
      font-weight: 600;
      color: var(--text-color-grey);
    }

    h3,
    h2 {
      margin: 0;
      margin-top: 1rem;
      color: var(--color-primary);
    }

    li {
      margin-bottom: 0.5rem;
    }
  }

  .content {
    hr {
      width: 100%;
      height: 1px;
      background-color: var(--color-divider);
      border: none;
      margin-top: 2rem;
    }
  }

  .about {
    a {
      font-size: 20px;
      line-height: 0;
      color: var(--text-color-primary);
    }
    blockquote {
      font-weight: 400;
      font-size: 14px;
    }

    h3,
    h2 {
      color: var(--text-color-primary);
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--code-block-green);
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--code-block-green);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--code-block-red);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .token.attr-name,
  .style,
  .token.string,
  .token.punctuation {
    color: var(--code-block-blue);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--code-block-red);
  }

  .token.function,
  .token.class-name,
  .token.maybe-class-name {
    color: var(--code-block-yellow);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--code-block-red);
  }
`;
