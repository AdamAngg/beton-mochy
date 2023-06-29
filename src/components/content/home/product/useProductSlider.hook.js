import { useState } from "react";
export const useProductSlider = ({ array }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(-140);
  const [transition, setTransition] = useState("all 0.3s");
  const [disabled, setDisabled] = useState(false);

  const blockNavigation = () => {
    setDisabled(true);
    if (disabled) {
      return 0;
    }
    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  const handleClickPrevious = () => {
    if (!disabled) {
      setTranslateX((prevTranslateX) => prevTranslateX + 20);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
    blockNavigation();
  };

  const handleClickNext = () => {
    if (!disabled) {
      setTranslateX((prevTranslateX) => prevTranslateX - 20);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    blockNavigation();
  };

  const style = {
    transition: `${transition}`,
    transform: `translateX(${translateX}%)`,
  };
  if (currentIndex === array.length || currentIndex === -array.length) {
    setTimeout(() => {
      setTransition("none");
      setTranslateX(-140);
      setCurrentIndex(0);
      setTimeout(() => {
        setTransition("all 0.3s");
      }, 50);
    }, 300);
  }

  return { handleClickPrevious, handleClickNext, currentIndex, style };
};
