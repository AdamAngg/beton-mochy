import Link from "next/link";
import Image from "next/image";
import styles from "./offers.module.css";
export const Offers = ({ offers }) => {
  const elements = offers.map((element, index) => {
    return (
      <li className={`${styles.wrapper_offer}`} key={index}>
        <picture className={styles.img_offer}>
          <Image
            aria-hidden="true"
            width={200}
            height={200}
            src={element?.data.src}
            alt={element?.alt}
          />
        </picture>
        <div className={styles.info_offer}>
          <h3 className={styles.title_offer}>{element?.title}</h3>
          <span className={styles.text_offer}>{element?.text}</span>
          <Link href={`${element.href}`}>
            <button className={styles.btn_offer}>Zobacz więcej</button>
          </Link>
        </div>
      </li>
    );
  });
  return (
    <>
      <div className={styles.offers}>
        <h1 className={styles.main_title_offers}>Nasze oferty</h1>
        <ul className={styles.container_offers}>{elements}</ul>
      </div>
    </>
  );
};
