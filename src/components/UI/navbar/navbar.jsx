import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const navbarButtons = buttons.map((button, i) => (
    <li key={i} className={styles.btn_element}>
      <Link href="#perks" className={styles.btn_wrapper}></Link>
      <button className={styles.btn}>
        <span>{button}</span>
      </button>
    </li>
  ));

  const [vis, setVis] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVis(false);
      } else setVis(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`${styles.wrapper} ${vis ? "" : styles.sticky}`}>
        <nav id="box" className={`${styles.navbar} `}>
          <Link href={"/"}>
            <Image
              key={logo}
              src={logo}
              className={styles.logo}
              priority={true}
              alt={altLogoText}
              blurDataURL={logo.blurDataURL}
            />
          </Link>
          <ul className={styles.btn_container}>{navbarButtons}</ul>
        </nav>
      </div>
    </>
  );
};
