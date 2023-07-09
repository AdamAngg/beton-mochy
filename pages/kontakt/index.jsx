import { Contact } from "@/components/content/contact/contact";
import Head from "next/head";
import { contactInfo } from "@/components/content/contact/contact.data";
const index = () => {
  return (
    <>
      <Head>
        <title>betoniarnia.mochy.pl - Kontakt</title>
      </Head>
      <Contact />
    </>
  );
};
export async function getStaticProps() {
  return {
    props: { offer: contactInfo[0] },
  };
}
export default index;
