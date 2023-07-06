import "../src/styles/variables.css";
import "../src/styles/globals.css";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { Content } from "@/components/content/content";
import { Header } from "@/components/UI/header/header";

import Head from "next/head";
import { Footer } from "@/components/UI/footer/footer";
import { ScrollToTopBtn } from "@/components/UI/backButton/scrollToTopBtn";

function MyApp({ Component, pageProps }) {
  const [ref, inView] = useInView({
    threshold: 0,
  });

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
          ref={ref}
        />
        <Component {...pageProps} />

        <Footer />
        {!inView && <ScrollToTopBtn />}
        {console.log(inView)}
      </Content>
    </>
  );
}
export default MyApp;
