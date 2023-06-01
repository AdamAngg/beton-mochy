import Head from "next/head";
import { Home } from "@/components/content/home/home";
function index() {
  return (
    <>
      <Head>
        <title>Betoniarnia.mochy.pl - Strona Główna</title>
      </Head>
      <Home />
    </>
  );
}
export default index;
