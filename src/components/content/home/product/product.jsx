import { useState } from "react";
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

  const handleClickPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setItems((prevItems) => [...prevItems, "hehe"]);
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    const zdjecie = require(`../../../../../public/assets/img/product/${Math.abs(
      currentIndex - 5
    )}.png`);
    setItems((prevItems) => [...prevItems, zdjecie]);
    console.log(zdjecie);
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 20}%)`,
  };

  return (
    <div className={styles.slider}>
      <button onClick={handleClickPrevious}>Previous</button>

      <div className={styles.sliderItems} style={sliderStyle}>
        {items.map((item, index) => (
          <div className={styles.sliderItem}>
            <img src={item.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};
//tylko końcowe elementy tablicy musisz zmienic których nie widać
