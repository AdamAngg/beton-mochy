import { useState } from "react";

export const useSlider = (startingIndex, images) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startingIndex);
  const increaseIndex = () => {
    setCurrentSlideIndex(currentSlideIndex + 1);
  };
  const decreaseIndex = () => {
    setCurrentSlideIndex(currentSlideIndex - 1);
  };
  let selectedImage;

  currentSlideIndex > images.length - 1
    ? setCurrentSlideIndex(0)
    : (selectedImage = images.at(currentSlideIndex));

  return { selectedImage, increaseIndex, decreaseIndex, currentSlideIndex };
};
