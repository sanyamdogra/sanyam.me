import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --max-width: 650px;
  --color-primary: #cf455c;
  --primary-background: white;
  --text-color-primary: black;
  --text-color-grey: rgb(102 102 102);
}
[data-theme="dark"] {
  --color-primary: #cf455c;
  --primary-background: black;
  --text-color-primary: white;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, Inter, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: var(--text-color-primary);
  background-color: var(--primary-background);
  font-size: 18px;
  line-height: 1.5;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
}
`;
