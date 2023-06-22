import styles from "./perks.module.css";
import { iconsArray } from "./perks.data";
import Image from "next/image";

export const Perks = () => {
  const icons = iconsArray.map(([icons, altText], i) => (
    <>
      <div key={i} className={styles.column_container}>
        <div className={styles.border}></div>
        <Image
          src={icons}
          className={styles.icons}
          priority={true}
          alt={altText}
          blurDataURL="../../../../../public/assets/img/header/blur.jpg"
        />
        <span className={styles.title}>Lorem Ipsum</span>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, sunt,
          nemo numquam, sapiente nesciunt nihil a maxime quia totam neque alias
          quibusdam culpa accusantium doloremque veritatis unde est molestiae
          enim harum animi error. Molestias exercitationem sit iure pariatur
          nulla fugit facere est facilis saepe corporis quam voluptatem, non,
          rem voluptatum!
        </p>
      </div>
    </>
  ));
  return <div className={styles.container}>{icons}</div>;
};
