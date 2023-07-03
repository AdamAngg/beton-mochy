import { offersItems } from "@/components/content/home/offer/offer.data";
import Head from "next/head";
import styles from "./id.module.css";
import Image from "next/image";
import { Footer } from "@/components/UI/footer/footer";
import { Navbar } from "@/components/UI/navbar/navbar";
import logo from "../../public/assets/img/navbar/logoBeton.png";
import Link from "next/link";
import styles1 from "../../src/components/UI/footer/footer.module.css";
const OfferPage = ({ offer }) => {
  const btn = [{ name: "Powrót", href: "/" }];
  const links = offersItems.map((element, index) => {
    return (
      <li className={styles1.footer_offer} key={index}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <Link href={`${element?.href + element?.title}`}>
          <p>{element?.title}</p>
        </Link>
      </li>
    );
  });
  return (
    <>
      <Head>
        <title>Betoniarnia.mochy.pl - Oferta/{offer.title}</title>
      </Head>

      <section className={styles.header}>
        <header>
          <Navbar
            logo={logo}
            altLogoText={"Zdjecie przedstawia logo"}
            buttons={btn}
          />
          <Image className={styles.header_img} src={offer.data} />
          <h1 className={styles.title}>{offer.title}</h1>
        </header>
      </section>
      <div className={styles.container}>
        <main className={styles.main_container}>
          <div className={styles.main_title_container}>
            <h1 className={styles.main_title}>{offer.title}</h1>
          </div>
          <picture className={styles.main_image}>
            <Image src={offer.data} />
          </picture>
          <div className={styles.main_text}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quam ea ab officia. Maxime labore impedit aliquid
              distinctio quasi mollitia inventore odit consectetur error
              laboriosam ad quam voluptates officia, soluta, delectus nostrum
              quas, esse expedita doloremque. Voluptas placeat sit delectus,
              quae tempora sed laboriosam enim fugit hic odio reiciendis, illum
              beatae quis dolorum ea officiis! Sed vel, aperiam, dolor expedita
              sint maiores dolore neque aut, earum quas pariatur deserunt minus?
              Ullam qui nam quis veniam molestiae soluta distinctio magnam
              quibusdam culpa! Iure, voluptatibus at? Ab laudantium provident
              nesciunt eaque veritatis at doloremque exercitationem recusandae
              inventore amet. Non asperiores ullam, temporibus rerum fugiat
              similique explicabo earum ratione atque dolore saepe recusandae,
              sequi labore officiis doloremque minus libero porro ipsum
              distinctio dolorum nesciunt nulla quasi? Doloremque tempore
              blanditiis vero, repudiandae iste numquam quae voluptas
              praesentium maiores doloribus architecto voluptatibus. Architecto
              ipsa dolorum soluta sed enim beatae, a cum, et, odio ab sint
              ratione excepturi aut possimus suscipit amet quia corrupti. Quia
              vel quasi animi at ipsa, nobis aliquam eum nostrum aperiam ex
              mollitia quaerat hic repudiandae error quidem cupiditate, impedit
              architecto adipisci corporis quisquam nisi voluptatibus
              reprehenderit? Deleniti reiciendis ipsam qui animi quos a?
              Aspernatur cumque sed eos quia illum. Cum, nisi!
            </span>
          </div>
        </main>
        <aside className={styles1.aside_container}>
          <div className={styles1.footer_element}>
            <h5 className={styles1.title}>Oferty</h5>
            <ul className={styles1.contact}>{links}</ul>
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
    return {
      params: { id: offer.title },
    };
  });

  return { paths, fallback: false };
};
export async function getStaticProps({ params }) {
  const { id } = params;
  const offer = offersItems.find((offer) => offer.title === id);

  return {
    props: { offer },
  };
}
