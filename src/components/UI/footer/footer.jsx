import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/assets/img/navbar/logoBeton.png";
import { offersItems } from "@/components/content/home/offer/offer.data";
export const Footer = () => {
  const mailtoLink = `mailto:betoniarnia@mochy.pl`;
  const links = offersItems.map((element, index) => {
    return (
      <li className={styles.footer_offer} key={index}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <Link href={`${element?.href + element?.title}`}>
          <p>{element?.title}</p>
        </Link>
      </li>
    );
  });

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_logo}>
            <picture>
              <Image
                height={"auto"}
                width={"auto"}
                src={logo}
                alt="Logo firmy"
                priority={true}
                blurDataURL={logo.blurDataURL}
              />
            </picture>
            <span className="logo_text">
              © ZWB Zbigniew Pabich 2023 Wszystkie prawa zastrzeżone.
            </span>
            <span>
              Projekt i realizacja:
              <Link legacyBehavior href={"https://github.com/AdamAngg"}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logo_made}
                >
                  {" "}
                  Adam Anglart
                </a>
              </Link>
            </span>
          </div>
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
          <div className={styles.footer_element}>
            <h5 className={styles.title}>Oferty</h5>
            <ul className={styles.contact}>{links}</ul>
          </div>
          <div className={styles.footer_element}>
            <h5>Jak do nas trafić</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12501.982697419044!2d16.158937701896328!3d51.99067442326459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x4705c33fe4842f61%3A0xe0cd1c55d9b4bdb6!2sBetoniarnia%20Mochy%2C%20Szkolna%2019%2C%2064-234%20Mochy%2C%20Polska!3m2!1d51.993374599999996!2d16.1691628!5e1!3m2!1spl!2sus!4v1688321496874!5m2!1spl!2sus"
              width="300"
              height="170"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className={`${styles.wave} ${styles.allWave}`}></div>
      <div className={`${styles.wave1} ${styles.allWave}`}></div>
      <div className={`${styles.wave2}  ${styles.allWave} `}></div>
      <div className={`${styles.wave3} ${styles.allWave}`}></div>
    </>
  );
};
