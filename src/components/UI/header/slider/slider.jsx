import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useSlider } from "./useSlider.hook";

import Image from "next/image";
import styles from "./slider.module.css";
import trans from "./sliderTransition.module.css";

export const Slider = ({ images }) => {
  const { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex } =
    useSlider(0, images);

  return (
    <>
      <div className={styles.header}>
        <ion-icon
          onClick={decreaseIndex}
          name="chevron-forward-outline"
          data-set="right"
        ></ion-icon>
        <ion-icon
          onClick={increaseIndex}
          name="chevron-back-outline"
          data-set="left"
        ></ion-icon>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={currentSlideIndex}
          classNames={trans}
          timeout={2000}
        >
          <Image
            src={selectedImage}
            className={styles.image}
            priority={true}
            alt={`Zdjęcie prezentujące: ${images[currentSlideIndex]}`}
            blurDataURL="../../../../../public/assets/img/header/blur.jpg"
          />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
