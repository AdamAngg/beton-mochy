import styles from "./header.module.css";
import Image from "next/image";
import { Slider } from "./slider/slider";
import { images } from "./header.data";
import { Navbar } from "../navbar/navbar";
import { logo } from "./header.data";
import { navbarBtn } from "./header.data";
import { singleNavbarBtn } from "./header.data";
import { forwardRef } from "react";
export const Header = forwardRef(
  ({ headerSlider, headerStatic, offer }, ref) => {
    const onlyImages = images.map(([firstElement]) => firstElement);
    const onlyAltText = images.map(([, secondElement]) => secondElement);

    return (
      <>
        {headerSlider && (
          <section className={styles.header} ref={ref}>
            <header className={styles.section}>
              <Navbar
                logo={logo?.logo}
                buttons={navbarBtn}
                altLogoText={logo?.text}
              />
              <Slider
                images={onlyImages}
                altText={onlyAltText}
                showNav={true}
              />
              ;
            </header>
          </section>
        )}

        {headerStatic && (
          <section className={styles.header_static}>
            <Navbar
              logo={logo?.logo}
              altLogoText={logo?.text}
              buttons={singleNavbarBtn}
            />
            <Image
              aria-hidden="true"
              priority={true}
              className={styles.header_img}
              src={offer?.data}
              alt={offer?.alt}
            />
            <h1 className={styles.title}>{offer?.title}</h1>
          </section>
        )}
      </>
    );
  }
);
