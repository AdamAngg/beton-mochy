import "../src/styles/variables.css";
import "../src/styles/globals.css";
import { useRouter } from "next/router";
import { Content } from "@/components/content/content";
import { Header } from "@/components/UI/header/header";

import Head from "next/head";
import { Footer } from "@/components/UI/footer/footer";
function MyApp({ Component, pageProps }) {
  const router = useRouter([]);
  const isOnMainPage = router.pathname === "/";

  const offer = pageProps.offer;
  return (
    <>
      <Head>
        <link rel="shortcut icon" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <Content>
        <Header
          headerSlider={isOnMainPage}
          headerStatic={!isOnMainPage}
          offer={offer}
        />
        <Component {...pageProps} />
        <Footer />
      </Content>
    </>
  );
}
export default MyApp;
