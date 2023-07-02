import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export const Navbar = ({ logo, buttons, altLogoText }) => {
  const { ref, inView, entry } = useInView({
    trackVisibility: true,
    threshold: 0.5,
    delay: 100,
  });
  useEffect(() => {
    const fixedTarget = document.querySelector("#box");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          fixedTarget.style.position = "static";
        } else {
          fixedTarget.style.position = "fixed";
        }
      });
    });

    observer.observe(document.querySelector("#box1"));
  }, []);

  const navbarButtons = buttons.map((button, i) => (
    <li key={i} className={styles.btn_element}>
      <Link href="#perks" className={styles.btn_wrapper}></Link>
      <button className={styles.btn}>
        <span>{button}</span>
      </button>
    </li>
  ));
  console.log(entry?.isVisible);
  return (
    <div id="box1" className={`${styles.wrapper}`}>
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
  );
};
