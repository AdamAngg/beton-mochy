import Link from "next/link";
import Image from "next/image";
import styles from "./product.module.css";
import { useProductSlider } from "./useProductSlider.hook";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Product = ({ items }) => {
  const { handleClickPrevious, handleClickNext, textIndex, style, direction } =
    useProductSlider({ array: items });

  const products = items.map((item, index) => {
    return (
      <>
        <picture key={index} className={styles.sliderItem}>
          <Image
            width={305}
            height={305}
            priority={true}
            src={item.data.src}
            alt={`Obraz pokazuje ${item.alt}`}
            blurDataURL={item.data.blurDataURL}
          />
        </picture>
      </>
    );
  });

  const transition = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
  };
  return (
    <>
      <div className={styles.product_container}>
        <h1 className={styles.main_title}>Nasze produkty</h1>
        <div className={styles.slider}>
          <nav>
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
          </nav>

          <div className={styles.container}>
            <div className={styles.sliderItems} style={style}>
              {products}
              {products}
              {products}
            </div>
          </div>
        </div>
        <TransitionGroup>
          <CSSTransition key={textIndex} classNames={transition} timeout={300}>
            <div className={styles.info_container}>
              <h3 className={styles.info_title}>{items[textIndex]?.title}</h3>
              <span className={styles.info_text}>{items[textIndex]?.text}</span>
              <Link href={items[textIndex]?.href}>
                <button className={styles.info_button}>Zobacz więcej</button>
              </Link>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};
