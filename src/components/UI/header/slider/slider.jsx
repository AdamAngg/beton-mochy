import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useSlider } from "./useSlider.hook";

import Image from "next/image";
import styles from "./slider.module.css";
import trans from "./sliderTransition.module.css";

export const Slider = ({ images, altText }) => {
  const { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex } =
    useSlider({ startingIndex: 0, images: images, delay: 10000 });

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
            alt={altText[currentSlideIndex]}
            blurDataURL="../../../../../public/assets/img/header/blur.jpg"
          />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
