import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { GlobalStyles } from "../styles/globalStyles";
import PlausibleProvider from "next-plausible";
import GoatCounter from "../services/goatCounter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider domain='sanyam.me' customDomain='sanyam.me'>
        <GoatCounter siteUrl={"https://sanyamdogra.goatcounter.com/count"} />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
