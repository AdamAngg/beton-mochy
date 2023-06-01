import Head from "next/head";
import { Home } from "../src/components/content/home/Home";

const index = () => {
  return (
    <>
      <Head>
        <title>betoniarnia.mochy.pl - Strona Główna</title>
      </Head>
      <Home />
    </>
  );
};
export default index;
