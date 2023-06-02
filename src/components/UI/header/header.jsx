import styles from "./header.module.css";
import { Slider } from "./slider/slider";

export const Header = () => {
  return (
    <div className={styles.section}>
      <Slider />;
    </div>
  );
};
