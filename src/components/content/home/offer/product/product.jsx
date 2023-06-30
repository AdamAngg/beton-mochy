import { useState } from "react";

import styles from "./product.module.css";

import { useProductSlider } from "./useProductSlider.hook";

export const Product = ({ items }) => {
  const { handleClickPrevious, handleClickNext, currentIndex, style } =
    useProductSlider({ array: items });

  return (
    <>
      <h1 className={styles.main_title}>Nasze produkty</h1>
      <div className={styles.slider}>
        <ion-icon
          onClick={handleClickNext}
          name="chevron-forward-outline"
          data-set="right"
        ></ion-icon>

        <ion-icon
          onClick={handleClickPrevious}
          name="chevron-back-outline"
          data-set="left"
        ></ion-icon>

        <div className={styles.container}>
          <div className={styles.sliderItems} style={style}>
            {items.map((item, index) => {
              console.log(item, index, currentIndex);
              return (
                <div key={`clone2${index}`} className={styles.sliderItem}>
                  <img src={item.data.src} alt={`Obraz pokazuje ${item.alt}`} />
                </div>
              );
            })}
            {items.map((item, index) => {
              return (
                <div key={index} className={styles.sliderItem}>
                  <img src={item.data.src} alt={`Obraz pokazuje ${item.alt}`} />
                </div>
              );
            })}
            {items.map((item, index) => {
              console.log(item, index, currentIndex);
              return (
                <div key={`clone${index}`} className={styles.sliderItem}>
                  <img src={item.data.src} alt={`Obraz pokazuje ${item.alt}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
