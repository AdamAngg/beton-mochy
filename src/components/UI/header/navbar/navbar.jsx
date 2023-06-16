import styles from "./navbar.module.css";
import Image from "next/image";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const navbarButtons = buttons.map((button) => (
    <li className={styles.btn}>
      <button>{button}</button>
    </li>
  ));
  return (
    <div className={styles.navbar}>
      <Image
        src={logo}
        className={styles.logo}
        priority={true}
        alt={altLogoText}
        blurDataURL="../../../../../public/assets/img/header/blur.jpg"
      />
      <ul className={styles.btn_container}>{navbarButtons}</ul>
    </div>
  );
};
