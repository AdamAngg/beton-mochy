import styles from "./header.module.css";
import { Slider } from "./slider/slider";
import { images } from "./header.data";

export const Header = () => {
  return (
    <header className={styles.section}>
      <Slider images={images} />;
    </header>
  );
};
