import "../src/styles/variables.css";
import "../src/styles/globals.css";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { Content } from "@/components/content/content";
import { Header } from "@/components/UI/header/header";
import { Footer } from "@/components/UI/footer/footer";
import { ScrollToTopBtn } from "@/components/UI/scrollToTopBtn/scrollToTopBtn";
import { Spinner } from "@/components/UI/spinner/spinner";
import { useFakeSpinner } from "@/hooks/useFakeSpinner.hook";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const router = useRouter([]);
  const isOnMainPage = router.pathname === "/";
  const dynamicPath = router.query.id;
  const offer = pageProps.offer;
  const { isLoading } = useFakeSpinner({
    isOnMainPage,
    dynamicPath,
    delay: 1000,
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Content>
        {isLoading && <Spinner />}
        <div style={{ opacity: isLoading ? 0 : 1, transition: "all 0.3s" }}>
          {!isLoading && (
            <>
              <Header
                headerSlider={isOnMainPage}
                headerStatic={!isOnMainPage}
                offer={offer}
                ref={ref}
              />
              <Component {...pageProps} />
              <Footer />
              {isOnMainPage && <ScrollToTopBtn show={!inView} />}
            </>
          )}
        </div>
      </Content>
    </>
  );
}
export default MyApp;
