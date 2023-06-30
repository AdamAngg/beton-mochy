import { useState } from "react";

import styles from "./product.module.css";

import { useProductSlider } from "./useProductSlider.hook";
import zd1 from "@/../public/assets/img/product/1.png";
import zd2 from "@/../public/assets/img/product/2.png";
import zd3 from "@/../public/assets/img/product/3.webp";
import zd4 from "@/../public/assets/img/product/4.png";
import zd5 from "@/../public/assets/img/product/5.png";
import zd6 from "@/../public/assets/img/product/6png.png";
import zd7 from "@/../public/assets/img/product/7.png";

export const Product = () => {
  const [items, setItems] = useState([zd1, zd2, zd3, zd4, zd5, zd6, zd7]);
  const { handleClickPrevious, handleClickNext, currentIndex, style } =
    useProductSlider({ array: items });

  return (
    <div className={styles.slider}>
      <button onClick={handleClickPrevious}>Previous</button>
      <div className={styles.container}>
        <div className={styles.sliderItems} style={style}>
          {items.map((item, index) => {
            console.log(item, index, currentIndex);
            return (
              <div key={`clone2${index}`} className={styles.sliderItem}>
                <img src={item.src} alt={`Image clone2 ${index + 1}`} />
              </div>
            );
          })}
          {items.map((item, index) => {
            return (
              <div key={index} className={styles.sliderItem}>
                <img src={item.src} alt={`Image ${index + 1}`} />
              </div>
            );
          })}
          {items.map((item, index) => {
            console.log(item, index, currentIndex);
            return (
              <div key={`clone${index}`} className={styles.sliderItem}>
                <img src={item.src} alt={`Image clone ${index + 1}`} />
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
