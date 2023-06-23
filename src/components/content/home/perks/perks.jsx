import styles from "./perks.module.css";
import { perksArray } from "./perks.data";
import Image from "next/image";
import { UseSlowLoad } from "@/hooks/useSlowLoad.hook";
import { title } from "./perks.data";

export const Perks = () => {
  const { imageLoaded, handleImageLoad } = UseSlowLoad();
  const perks = perksArray.map((perk, i) => (
    <>
      <div key={i} className={styles.column_container}>
        <div className={styles.border}></div>
        <Image
          onLoad={handleImageLoad}
          src={perk.icon}
          className={`${styles.icons} ${imageLoaded ? styles.loaded : ""}`}
          priority={true}
          alt={perk.altText}
          blurDataURL="../../../../../public/assets/img/header/blur.jpg"
        />
        <span className={styles.title}>{perk.title}</span>
        <p className={styles.text}>{perk.text}</p>
      </div>
    </>
  ));
  return (
    <>
      <div className={styles.main_title_wrapper}>
        <h1 className={styles.main_title}>{title}</h1>
      </div>
      <div className={styles.container}>{perks}</div>
    </>
  );
};
