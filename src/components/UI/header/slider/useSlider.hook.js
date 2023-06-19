import { useEffect, useState } from "react";

export const useSlider = (startingIndex, images) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startingIndex);
  const [isDisabled, setIsDisabled] = useState(false);
  let selectedImage = images.at(currentSlideIndex);

  const blockNavigation = () => {
    setIsDisabled(true);
    if (isDisabled) {
      return 0;
    }
    setTimeout(() => {
      setIsDisabled(false);
    }, 2200);
  };

  const increaseIndex = () => {
    if (!isDisabled) {
      currentSlideIndex >= images.length - 1
        ? setCurrentSlideIndex(0)
        : (selectedImage = images.at(currentSlideIndex)) &&
          setCurrentSlideIndex(currentSlideIndex + 1);
    }
    blockNavigation();
  };
  const decreaseIndex = () => {
    if (!isDisabled) {
      currentSlideIndex < images.length - 1
        ? setCurrentSlideIndex(images.length - 1)
        : (selectedImage = images.at(currentSlideIndex)) &&
          setCurrentSlideIndex(currentSlideIndex - 1);
    }
    blockNavigation();
  };
  useEffect(() => {
    if (!isDisabled) {
      const interval = setInterval(() => {
        console.log(currentSlideIndex);
        currentSlideIndex >= images.length - 1
          ? setCurrentSlideIndex(0)
          : (selectedImage = images.at(currentSlideIndex)) &&
            setCurrentSlideIndex(currentSlideIndex + 1);
      }, 10000);
      return () => clearInterval(interval);
    }
    blockNavigation();
  }, [currentSlideIndex]);

  return {
    selectedImage,
    increaseIndex,
    decreaseIndex,
    currentSlideIndex,
  };
};
