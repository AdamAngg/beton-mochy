import styles from "./header.module.css";
import { Slider } from "./slider/slider";
import { images } from "./header.data";
import { Navbar } from "../navbar/navbar";
import { logo } from "./header.data";
import { navbarBtn } from "./header.data";

export const Header = () => {
  const onlyImages = images.map(([firstElement]) => firstElement);
  const onlyAltText = images.map(([, secondElement]) => secondElement);
  return (
    <>
      <header className={styles.section}>
        <Navbar logo={logo.logo} buttons={navbarBtn} altLogoText={logo.text} />;
        <Slider images={onlyImages} altText={onlyAltText} />;
      </header>
    </>
  );
};
