import Link from "next/link";
import styles from "./product.module.css";
import { useProductSlider } from "./useProductSlider.hook";

export const Product = ({ items }) => {
  const { handleClickPrevious, handleClickNext, currentIndex, style } =
    useProductSlider({ array: items });
  const products = items.map((item, index) => {
    console.log(item, index, currentIndex);
    return (
      <>
        <picture key={index} className={styles.sliderItem}>
          <img src={item.data.src} alt={`Obraz pokazuje ${item.alt}`} />
        </picture>
        <div className={styles.info_container}>
          <h3></h3>
          <span></span>
          <Link href={"/"}>
            <button></button>
          </Link>
        </div>
      </>
    );
  });

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
            {products}
            {products}
            {products}
          </div>
        </div>
      </div>
    </>
  );
};
