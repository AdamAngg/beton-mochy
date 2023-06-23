import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const navbarButtons = buttons.map((button, i) => (
    <li key={i} className={styles.btn_wrapper}>
      <Link href="#perks">
        <button className={styles.btn}>
          <span>{button}</span>
        </button>
      </Link>
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
