import { useState } from "react";

export const useSlider = (startingIndex, images) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startingIndex);
  let selectedImage;
  try {
    selectedImage = images.at(currentSlideIndex);
    console.log(selectedImage);
  } catch (err) {
    currentSlideIndex > images.length ? setCurrentSlideIndex(0) : 0;
  }
  return { selectedImage };
};
