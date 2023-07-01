import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const navbarButtons = buttons.map((button, i) => (
    <li key={i} className={styles.btn_element}>
      <Link href="#perks" className={styles.btn_wrapper}></Link>
      <button className={styles.btn}>
        <span>{button}</span>
      </button>
    </li>
  ));
  return (
    <nav className={styles.navbar}>
      <Link href={"/"}>
        <Image
          key={logo}
          src={logo}
          className={styles.logo}
          priority={true}
          alt={altLogoText}
          blurDataURL="../../../../../public/assets/img/header/blur.jpg"
        />
      </Link>
      <ul className={styles.btn_container}>{navbarButtons}</ul>
    </nav>
  );
};
