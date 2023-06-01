import styles from "./header.module.css";
import Image from "next/image";
import betoniarz1 from "../../../../../public/assets/img/header/betoniarz1.jpg";

export const Header = () => {
  return <Image src={betoniarz1} className={styles.image} />;
};
