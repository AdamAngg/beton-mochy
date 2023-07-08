import styles from "./footer.module.css";
import { offersItems } from "@/components/content/home/offer/offer.data";
import Link from "next/link";
import { useRouter } from "next/router";

export const Links = () => {
  const router = useRouter();
  const dynamicPath = router.query.id;
  const links = offersItems.map((element, index) => {
    return (
      <li
        className={`${styles.footer_offer} ${
          dynamicPath === element.normalizedTitle ? styles.footer_active : ""
        }`}
        key={index}
      >
        <ion-icon
          role="img"
          class="md hydrated"
          name="chevron-forward-outline"
          className={`${
            dynamicPath === element.normalizedTitle ? styles.footer_active : ""
          }`}
        ></ion-icon>
        <Link href={`${element.href}`}>
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
