import styles from "./perks.module.css";
import { iconsArray } from "./perks.data";
import Image from "next/image";

export const Perks = () => {
  const icons = iconsArray.map(([icons, altText]) => (
    <Image
      src={icons}
      className={styles.icons}
      priority={true}
      alt={altText}
      blurDataURL="../../../../../public/assets/img/header/blur.jpg"
    />
  ));
  return <div className={styles.icons_container}>{icons}</div>;
};
