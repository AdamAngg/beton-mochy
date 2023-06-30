import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import { useProductSlider } from "./useProductSlider.hook";

export const Product = ({ items }) => {
  const { handleClickPrevious, handleClickNext, currentIndex, style } =
    useProductSlider({ array: items });
  const products = items.map((item, index) => {
    console.log(item.data);
    return (
      <>
        <picture key={index} className={styles.sliderItem}>
          <Image
            width={305}
            height={305}
            priority={true}
            src={item.data.src}
            alt={`Obraz pokazuje ${item.alt}`}
            blurDataURLp={item.data.blurDataURL}
          />
        </picture>
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
      <div className={styles.info_container}>
        <h3>{items[currentIndex].title}</h3>
        <span>{items[currentIndex].text}</span>
        <Link href={items[currentIndex].href}>
          <button></button>
        </Link>
      </div>
    </>
  );
};
