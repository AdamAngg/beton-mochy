import zd1 from "../../../../../public/assets/img/header/zd1.jpg";
import betoniarz1 from "../../../../../public/assets/img/header/betoniarz1.jpg";
import { useSlider } from "./useSlider.hook";
import Image from "next/image";
import styles from "./slider.module.css";
import blur from "../../../../../public/assets/img/header/blur.jpg";
export const Slider = () => {
  const images = [zd1, betoniarz1];
  const { selectedImage } = useSlider(0, images);
  return (
    <Image
      src={selectedImage}
      className={styles.image}
      priority={true}
      blurDataURL="../../../../../public/assets/img/header/blur.jpg"
    />
  );
};
