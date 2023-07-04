import styles from "./footer.module.css";
import Link from "next/link";
export const Contact = () => {
  const mailtoLink = `mailto:betoniarnia@mochy.pl`;
  return (
    <div className={styles.footer_element}>
      <h5 className={styles.title}>Kontakt</h5>
      <ul className={styles.contact}>
        <li>
          <ion-icon name="call-outline"></ion-icon>
          <p className="phone">Tel. 4866456645</p>
        </li>
        <li>
          <ion-icon name="mail-outline"></ion-icon>
          <p className={styles.email}>
            <Link href={mailtoLink}>Mail: emm@emm.pl</Link>
          </p>
        </li>
        <li>
          <ion-icon name="navigate-outline"></ion-icon>
          <p className="adress">64-234 Mochy ul. Szkolna 19</p>
        </li>
        <li>
          <ion-icon name="time-outline"></ion-icon>
          <p className="open">8:00 - 16:00</p>
        </li>
      </ul>
    </div>
  );
};
