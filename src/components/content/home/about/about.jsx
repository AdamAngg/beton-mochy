import styles from "./about.module.css";
import { useCountDown } from "./useCountDown.hook";
import { useInView } from "react-intersection-observer";
export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const years = useCountDown({ inView: inView, delay: 100 });

  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, labore
          incidunt, cupiditate impedit totam dolorum minima excepturi id
          delectus ex, architecto ipsa quibusdam rem fugit in nemo blanditiis
          magnam animi fugiat pariatur provident. Consequatur laudantium eveniet
          tempora officia non! Expedita voluptate velit nam sequi nemo totam
          corporis cupiditate quia sunt?
        </p>
      </div>
      <div ref={ref} className={styles.years_container}>
        <span className={styles.years}>{years}</span>
        <p className={styles.years_text}>Lat Doświadczenia w branży</p>
      </div>
    </div>
  );
};
