import styles from "./header.module.css";
import { Slider } from "./slider/slider";
import { images } from "./header.data";

export const Header = () => {
  const onlyImages = images.map(([firstElement]) => firstElement);
  const onlyAltText = images.map(([, secondElement]) => secondElement);
  return (
    <header className={styles.section}>
      <Slider images={onlyImages} altText={onlyAltText} />;
    </header>
  );
};
