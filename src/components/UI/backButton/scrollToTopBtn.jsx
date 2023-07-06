import styles from "./scrollToTopBtn.module.css";
export const ScrollToTopBtn = () => {
  return (
    <div className={styles.backButton_container}>
      <button className={styles.backButton}>
        <ion-icon
          name="arrow-up-outline"
          role="img"
          class="md hydrated"
        ></ion-icon>
      </button>
    </div>
  );
};
