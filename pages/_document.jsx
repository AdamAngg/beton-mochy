import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="title" content="betoniarnia.mochy.pl" />
        <meta
          name="description"
          content="Betoniarnia Mochy - Zbigniew Pabich"
        />

        <meta name="theme-color" content="#1f1f1f" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://betoniarnia.mochy.pl/" />
        <meta property="og:title" content="betoniarnia.mochy.pl" />
        <meta
          property="og:description"
          content="Portfolio - Frontend Developer"
        />
        <meta
          property="og:image"
          content="" //foto daj w webp
        />
      </Head>
      <body>
        <Main />
        <div id="overlay-root"></div>
        <NextScript />
      </body>
    </Html>
  );
}
