import styles from "./main.module.css";
import Image from "next/image";
export const Main = ({ offer }) => {
  return (
    <main className={styles.main_container}>
      <div className={styles.main_title_container}>
        <h1 className={styles.main_title}>{offer.title}</h1>
      </div>
      <picture className={styles.main_image}>
        <Image aria-hidden="true" src={offer.data} />
      </picture>
      <div className={styles.main_text}>
        <span>{offer.longerText}</span>
      </div>
    </main>
  );
};
