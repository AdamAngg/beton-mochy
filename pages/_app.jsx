import "../src/styles/variables.css";
import "../src/styles/globals.css";
import { Content } from "@/components/content/content";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <Content>
        <Component {...pageProps} />
      </Content>
    </>
  );
}
export default MyApp;
