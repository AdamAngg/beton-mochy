import styles from "./footer.module.css";
import { Madeby } from "./madeby.footer";
import { Contact } from "./contact.footer";
import { Links } from "./links.footer";
import { Map } from "./map.footer";
import { Waves } from "./waves/waves";
export const Footer = () => {
  return (
    <section className={styles.footer_main}>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <Madeby />
          <Contact />
          <Links />
          <Map />
        </div>
      </footer>
      <Waves />
    </section>
  );
};
