import styles from "./footer.module.css";
import logo from "@/../public/assets/img/navbar/logoBeton.png";
import Image from "next/image";
import Link from "next/link";

export const Madeby = () => {
  return (
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
  );
};
