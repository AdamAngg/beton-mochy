import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSlider } from "./useSlider.hook";
import { UseSlowLoad } from "@/hooks/useSlowLoad.hook";
import Image from "next/image";
import styles from "./slider.module.css";
import trans from "./sliderTransition.module.css";

export const Slider = ({ images, altText, showNav }) => {
  const { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex } =
    useSlider({ startingIndex: 0, images: images, delay: 10000000000000 });
  const { imageLoaded, handleImageLoad } = UseSlowLoad();
  return (
    <>
      <nav className={`${styles.header} ${showNav ? " " : styles.disable}`}>
        <ion-icon
          onClick={decreaseIndex}
          name="chevron-forward-outline"
          data-set="right"
          role="img"
          class="md hydrated"
        ></ion-icon>

        <ion-icon
          onClick={increaseIndex}
          name="chevron-back-outline"
          data-set="left"
          role="img"
          class="md hydrated"
        ></ion-icon>
      </nav>
      <TransitionGroup>
        <CSSTransition
          key={currentSlideIndex}
          classNames={trans}
          timeout={2000}
        >
          <Image
            aria-hidden="true"
            onLoad={handleImageLoad}
            src={selectedImage}
            className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
            priority={true}
            alt={altText[currentSlideIndex]}
            blurDataURL={selectedImage?.blurDataURL}
          />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
