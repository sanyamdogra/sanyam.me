import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --max-width: 650px;
  --color-primary: rgb(207, 69, 92);
  --color-primary-transparent: rgba(255,255,255,0.93);
  --primary-background: white;
  --text-color-primary: black;
  --text-color-grey: rgb(102 102 102);
  --color-divider: rgba(102, 102, 102, 0.3);
}
[data-theme="dark"] {
  --color-primary: #cf455c;
  --primary-background: black;
  --text-color-primary: white;
  --color-primary-transparent: rgba(207, 69, 92, 0.95);
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
  margin: 0;
}
`;
