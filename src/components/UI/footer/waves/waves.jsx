import styles from "./waves.module.css";
export const Waves = () => {
  return (
    <>
      <div className={`${styles.wave} ${styles.allWave}`}></div>
      <div className={`${styles.wave1} ${styles.allWave}`}></div>
      <div className={`${styles.wave2}  ${styles.allWave} `}></div>
      <div className={`${styles.wave3} ${styles.allWave}`}></div>
    </>
  );
};
