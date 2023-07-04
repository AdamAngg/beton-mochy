import styles from "./footer.module.css";
import { offersItems } from "@/components/content/home/offer/offer.data";
import Link from "next/link";
export const Links = () => {
  const links = offersItems.map((element, index) => {
    return (
      <li className={styles.footer_offer} key={index}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <Link href={`${element?.href + element?.title}`}>
          <p>{element?.title}</p>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.footer_element}>
      <h5 className={styles.title}>Oferty</h5>
      <ul className={styles.contact}>{links}</ul>
    </div>
  );
};
