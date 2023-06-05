import zd1 from "../../../../../public/assets/img/header/zd1.jpg";
import betoniarz1 from "../../../../../public/assets/img/header/betoniarz1.jpg";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useSlider } from "./useSlider.hook";

import Image from "next/image";
import styles from "./slider.module.css";
import trans from "./sliderTransition.module.css";

export const Slider = () => {
  const images = [zd1, betoniarz1];
  const { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex } =
    useSlider(0, images);

  return (
    <>
      <button onClick={increaseIndex}>inc</button>
      <button onClick={decreaseIndex}>dec</button>
      <TransitionGroup className={styles.section}>
        <CSSTransition
          key={currentSlideIndex}
          classNames={trans}
          timeout={2000}
        >
          <Image
            src={selectedImage}
            className={styles.image}
            priority={true}
            alt="hehe"
            blurDataURL="../../../../../public/assets/img/header/blur.jpg"
          />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
