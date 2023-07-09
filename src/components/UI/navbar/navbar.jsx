import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const [active, setActive] = useState(false);
  const onClickHandle = () => {
    setActive(!active);
  };
  const navbarButtons = buttons.map((button, i) => (
    <li key={i} className={styles.btn_element}>
      <Link href={button.href} className={styles.btn_wrapper}></Link>
      <button className={styles.btn}>
        <span>{button.name}</span>
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
          <ul className={styles.btn_nav_container} onClick={onClickHandle}>
            <li
              className={`${styles.nav_btn_top} ${
                active ? "" : styles.nav_btn_active_top
              }`}
            ></li>
            <li
              className={`${styles.nav_btn_middle} ${
                active ? "" : styles.nav_btn_active_bottom
              }`}
            ></li>
            <li
              className={`${styles.nav_btn_bottom} ${
                active ? "" : styles.nav_btn_active
              }`}
            ></li>
          </ul>
          <ul
            className={`${styles.btn_container} ${
              active ? "" : styles.btn_container_active
            }`}
          >
            {navbarButtons}
          </ul>
        </nav>
      </div>
    </>
  );
};
