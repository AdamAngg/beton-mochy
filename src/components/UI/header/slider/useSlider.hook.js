import { useState } from "react";

export const useSlider = (startingIndex, images) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startingIndex);
  const [isDisabled, setIsDisabled] = useState(false);
  let selectedImage = images.at(currentSlideIndex);
  const increaseIndex = () => {
    if (!isDisabled) {
      currentSlideIndex >= images.length - 1
        ? setCurrentSlideIndex(0)
        : (selectedImage = images.at(currentSlideIndex)) &&
          setCurrentSlideIndex(currentSlideIndex + 1);
    }
    setIsDisabled(true);
    if (isDisabled) {
      return 0;
    }
    setTimeout(() => {
      setIsDisabled(false);
    }, 2200);
  };
  const decreaseIndex = () => {
    if (!isDisabled) {
      currentSlideIndex < images.length - 1
        ? setCurrentSlideIndex(images.length - 1)
        : (selectedImage = images.at(currentSlideIndex)) &&
          setCurrentSlideIndex(currentSlideIndex - 1);
    }
    setIsDisabled(true);
    if (isDisabled) {
      return 0;
    }
    setTimeout(() => {
      setIsDisabled(false);
    }, 2200);
  };

  return {
    selectedImage,
    increaseIndex,
    decreaseIndex,
    currentSlideIndex,
  };
};
