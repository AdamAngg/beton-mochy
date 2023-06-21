import { useState } from "react";
export const UseSlowLoad = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return { imageLoaded, handleImageLoad };
};
