import Link from "next/link";
import styles from "./scrollToTopBtn.module.css";
export const ScrollToTopBtn = ({ show }) => {
  const buttonClickHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${styles.backButton_container} ${
        show ? styles.backButton_container_enter : ""
      }`}
    >
      <button className={styles.backButton} onClick={buttonClickHandler}>
        <ion-icon
          name="arrow-up-outline"
          role="img"
          class="md hydrated"
        ></ion-icon>
      </button>
    </div>
  );
};
