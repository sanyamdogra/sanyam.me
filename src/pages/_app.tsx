import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { GlobalStyles } from "../styles/globalStyles";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider domain='sanyam.me' customDomain='sanyam.me'>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
