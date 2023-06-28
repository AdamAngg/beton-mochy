import { useEffect, useRef, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./product.module.css";
import transitionStyles from "./productTransition.module.css";

import zd1 from "@/../public/assets/img/product/1.png";
import zd2 from "@/../public/assets/img/product/2.png";
import zd3 from "@/../public/assets/img/product/3.png";
import zd4 from "@/../public/assets/img/product/4.png";
import zd5 from "@/../public/assets/img/product/5.png";
import zd6 from "@/../public/assets/img/product/6png.png";
import zd7 from "@/../public/assets/img/product/7.png";

export const Product = () => {
  const [items, setItems] = useState([zd1, zd2, zd3, zd4, zd5, zd6, zd7]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const ref = useRef();

  const handleClickPrevious = () => {
    setTranslateX((prevTranslateX) => prevTranslateX + 100);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    updateItems();
  };

  const handleClickNext = () => {
    setTranslateX((prevTranslateX) => prevTranslateX - 100);
    setCurrentIndex((prevIndex) => (prevIndex === 7 ? 1 : prevIndex + 1));
    console.log(currentIndex);

    if (currentIndex === 6) {
      setItems([zd1, zd2, zd3, zd4, zd5, zd6, zd7]);
      setTranslateX(0);
    } else updateItems();
  };
  const style = {
    transition: currentIndex === 7 ? " " : "all 0.3s !important ",
    transition: currentIndex !== 7 ? "all 0.3s !important " : " ",
    transform: `translateX(${translateX}%)`,
  };

  const updateItems = () => {
    const zdjecie = items[currentIndex === 7 ? 0 : currentIndex];
    setItems((prevItems) => [...prevItems, zdjecie]);
  };

  return (
    <div className={styles.slider}>
      <button onClick={handleClickPrevious}>Previous</button>
      <div className="container">
        <div className={styles.sliderItems}>
          {items.map((item, index) => {
            console.log(item, index, currentIndex);
            return (
              <div
                ref={ref}
                key={index}
                className={styles.sliderItem}
                style={style}
              >
                <img src={item.src} alt={`Image ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};
//tylko końcowe elementy tablicy musisz zmienic których nie widać
