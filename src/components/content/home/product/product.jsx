import { useState } from "react";
import styles from "./product.module.css";
import zd1 from "@/../public/assets/img/product/1.png";
import zd2 from "@/../public/assets/img/product/2.png";
import zd3 from "@/../public/assets/img/product/3.png";
import zd4 from "@/../public/assets/img/product/4.png";
import zd5 from "@/../public/assets/img/product/5.png";
import zd6 from "@/../public/assets/img/product/6png.png";
import zd7 from "@/../public/assets/img/product/7.png";
export const Product = () => {
  const items = [zd1, zd2, zd3, zd4, zd5, zd6, zd7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const visibleItems = [
    items[(currentIndex - 2 + items.length) % items.length],
    items[(currentIndex - 1 + items.length) % items.length],
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <div>
      <button onClick={handleClickPrevious}>Previous</button>
      {visibleItems.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <img src={item.src} />
          </div>
        );
      })}
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};
