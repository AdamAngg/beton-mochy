import { offersItems } from "@/components/content/home/offer/offer.data";
import Head from "next/head";
import styles from "./id.module.css";
import { removePolishChars } from "@/helpers/removePolishChars.helper";
import { Footer } from "@/components/UI/footer/footer";
import { Links } from "@/components/UI/footer/links.footer";
import { Offers } from "@/components/content/offers/offers";
import { Main } from "@/components/content/offers/main/main";
const OfferPage = ({ offer }) => {
  return (
    <>
      <Head>
        <title>Betoniarnia.mochy.pl - {offer.title}</title>
      </Head>

      <Offers offer={offer} />
      <div className={styles.container}>
        <Main offer={offer} />
        <aside className={styles.aside_container}>
          <div className={styles.links_container}>
            <Links />
          </div>
        </aside>
      </div>
      <section className={styles.footer}>
        <Footer />
      </section>
    </>
  );
};
export default OfferPage;
export const getStaticPaths = async () => {
  const paths = offersItems.map((offer) => {
    const normalizedTitle = removePolishChars(offer.title);

    return {
      params: { id: normalizedTitle },
    };
  });

  return { paths, fallback: false };
};
export async function getStaticProps({ params }) {
  const { id } = params;
  const normalizedTitle = removePolishChars(id);
  const offer = offersItems.find(
    (offer) => removePolishChars(offer.title) === normalizedTitle
  );

  return {
    props: { offer },
  };
}
