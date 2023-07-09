import styles from "../mochy/mochygrodzisk.module.css";
import Link from "next/link";

export const Mochy = () => {
  const mailtoLink = `mailto:betoniarnia@mochy.pl`;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6250.486898019866!2d16.170738!3d51.994288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705c33fe4842f61%3A0xe0cd1c55d9b4bdb6!2sBetoniarnia%20Mochy!5e1!3m2!1spl!2sus!4v1688817917457!5m2!1spl!2sus"
            width="700"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
        <div className={styles.element}>
          <h5 className={styles.title}>Kontakt</h5>
          <ul className={styles.contact}>
            <li>
              <ion-icon
                role="img"
                class="md hydrated"
                name="call-outline"
              ></ion-icon>
              <p className="phone">Tel. 65 549 00 89</p>
            </li>
            <li>
              <ion-icon
                role="img"
                class="md hydrated"
                name="mail-outline"
              ></ion-icon>
              <p className={styles.email}>
                <Link href={mailtoLink}>Mail: betoniarnia@mochy.pl</Link>
              </p>
            </li>
            <li>
              <ion-icon
                role="img"
                class="md hydrated"
                name="navigate-outline"
              ></ion-icon>
              <p className="adress">64-234 Mochy ul. Szkolna 19</p>
            </li>
            <li>
              <ion-icon
                role="img"
                class="md hydrated"
                name="time-outline"
              ></ion-icon>
              <p className="open">7:00 - 15:00</p>
            </li>
            <li>
              <ion-icon
                name="calendar-number-outline"
                role="img"
                class="md hydrated"
              ></ion-icon>
              <p className="calendar">Pon - Pt </p>
            </li>
            <li>
              <ion-icon
                name="business-outline"
                role="img"
                class="md hydrated"
              ></ion-icon>
              <p className="nip">7831024656</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
