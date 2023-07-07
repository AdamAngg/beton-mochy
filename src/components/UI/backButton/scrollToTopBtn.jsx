import Link from "next/link";
import styles from "./scrollToTopBtn.module.css";
export const ScrollToTopBtn = ({ show }) => {
  return (
    <div
      className={`${styles.backButton_container} ${
        show ? styles.backButton_container_enter : ""
      }`}
    >
      <Link href={"/"}>
        <button className={styles.backButton}>
          <ion-icon
            name="arrow-up-outline"
            role="img"
            class="md hydrated"
          ></ion-icon>
        </button>
      </Link>
    </div>
  );
};
