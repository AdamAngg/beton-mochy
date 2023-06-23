import styles from "./perks.module.css";
import { perksArray } from "./perks.data";
import Image from "next/image";

export const Perks = () => {
  const perks = perksArray.map((perk, i) => (
    <>
      <div key={i} className={styles.column_container}>
        <div className={styles.border}></div>
        <Image
          src={perk.icon}
          className={styles.icons}
          priority={true}
          alt={perk.altText}
          blurDataURL="../../../../../public/assets/img/header/blur.jpg"
        />
        <span className={styles.title}>{perk.title}</span>
        <p className={styles.text}>{perk.text}</p>
      </div>
    </>
  ));
  return <div className={styles.container}>{perks}</div>;
};
