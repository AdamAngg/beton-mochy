import styles from "./footer.module.css";
import { offersItems } from "@/components/content/home/offer/offer.data";
import Link from "next/link";
import { useState } from "react";

export const Links = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const links = offersItems.map((element, index) => {
    const isActive = activeIndex === index;
    return (
      <li
        onClick={() => handleClick(index)}
        className={`${styles.footer_offer} ${
          isActive ? styles.footer_active : ""
        }`}
        key={index}
      >
        <ion-icon
          name="chevron-forward-outline"
          className={`${isActive ? styles.footer_active : ""}`}
        ></ion-icon>
        <Link href={`${element.normalizedTitle}`}>
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
