import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const orignalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        orignalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='static/favicons/favicon.ico' />
          <link rel='shortcut icon' href='static/favicons/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='static/favicons/apple-touch-icon.png'
          />
          <meta
            name='apple-mobile-web-app-title'
            content="Sanyam Dogra's Blog"
          />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='mobile-web-app-capable' content='yes' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='static/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='static/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='static/favicons/site.webmanifest'></link>
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialColorTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const setInitialColorTheme = `(function () {
  ${checkThemePresent.toString()}checkThemePresent();
})()`;

function checkThemePresent() {
  function getThemePreset() {
    const theme = window.localStorage.getItem("theme");
    const hasTheme = typeof theme === "string";
    if (hasTheme) {
      return theme;
    }

    const hasPreferedDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const hasMediaQueryPreference =
      typeof hasPreferedDarkMode.matches === "boolean";

    if (hasMediaQueryPreference) {
      return hasPreferedDarkMode.matches ? "dark" : "light";
    }

    return "dark";
  }

  const colorTheme = getThemePreset();
  const root = document.documentElement;
  root.style.setProperty("--initial-data-theme", colorTheme);
  if (colorTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
