import styles from "./footer.module.css";
import { Madeby } from "./madeby.footer";
import { Contact } from "./contact.footer";
import { Links } from "./links.footer";
import { Map } from "./map.footer";
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <Madeby />
          <Contact />
          <Links />
          <Map />
        </div>
      </footer>
      <div className={`${styles.wave} ${styles.allWave}`}></div>
      <div className={`${styles.wave1} ${styles.allWave}`}></div>
      <div className={`${styles.wave2}  ${styles.allWave} `}></div>
      <div className={`${styles.wave3} ${styles.allWave}`}></div>
    </>
  );
};
