import styles from "./branch.module.css";
import Image from "next/image";
import Link from "next/link";
import zdjecie from "@/../public/assets/img/header/betoniarz1.jpg";
export const Branch = () => {
  return (
    <div className={styles.branch}>
      <h1 className={styles.branch_title}>Filia w Grodzisku WLKP</h1>
      <div className={styles.branch_container}>
        <picture className={styles.branch_img}>
          <Image
            src={zdjecie}
            alt="Zdjecie filli w grodzisku"
            priority={true}
            blurDataURL={zdjecie.blurDataURL}
          />
        </picture>
        <div className={styles.branch_info}>
          <span className={styles.branch_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            minima fugit debitis repellat amet necessitatibus quas esse ratione
            qui obcaecati facilis eius iste magnam laborum eos ex autem
            voluptatem quam impedit. Sequi temporibus, quis commodi
            exercitationem voluptas explicabo, veritatis voluptatem, eum nobis
            recusandae doloribus dolorum esse corrupti necessitatibus impedit
            laborum!
          </span>
          <div className={styles.branch_btns}>
            <Link
              legacyBehavior
              href={
                "https://www.google.com/maps/dir/Current+Location/Rolna+62-065/@52.2464817,16.3603797,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4705ccd41903ff81:0xb54708cdf5b675ab!2m2!1d16.3603797!2d52.2464817?entry=ttu"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <button className={styles.branch_btn_left}>Kontakt</button>
              </a>
            </Link>
            <Link
              legacyBehavior
              href={
                "https://www.google.com/maps/dir/Current+Location/Rolna+62-065/@52.2464817,16.3603797,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4705ccd41903ff81:0xb54708cdf5b675ab!2m2!1d16.3603797!2d52.2464817?entry=ttu"
              }
            >
              <a target="_blank" rel="noopener noreferrer">
                <button className={styles.branch_btn_right}>
                  <span className={styles.btn_text}>Trasa</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
