import { useState } from "react";

export const useSlider = (startingIndex, images) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startingIndex);
  let selectedImage = images.at(currentSlideIndex);
  const increaseIndex = () => {
    currentSlideIndex >= images.length - 1
      ? setCurrentSlideIndex(0)
      : (selectedImage = images.at(currentSlideIndex)) &&
        setCurrentSlideIndex(currentSlideIndex + 1);
  };
  const decreaseIndex = () => {
    currentSlideIndex < images.length - 1
      ? setCurrentSlideIndex(images.length - 1)
      : (selectedImage = images.at(currentSlideIndex)) &&
        setCurrentSlideIndex(currentSlideIndex - 1);
  };

  return { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex };
};
