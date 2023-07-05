import { offersItems } from "@/components/content/home/offer/offer.data";
import Head from "next/head";
import styles from "./id.module.css";
import { removePolishChars } from "@/helpers/removePolishChars.helper";
import { Links } from "@/components/UI/footer/links.footer";
import { Main } from "@/components/content/offers/main/main";

const OfferPage = ({ offer }) => {
  return (
    <>
      <Head>
        <title>Betoniarnia.mochy.pl - {offer.title}</title>
      </Head>

      <div className={styles.container}>
        <Main offer={offer} />
        <aside className={styles.aside_container}>
          <div className={styles.links_container}>
            <Links />
          </div>
        </aside>
      </div>
    </>
  );
};
export default OfferPage;
export const getStaticPaths = async () => {
  const paths = offersItems.map((offer) => {
    const normalizedTitle = removePolishChars(offer.title);
    offersItems.normalizedTitle = normalizedTitle;
    console.log(offersItems.normalizedTitle);
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
