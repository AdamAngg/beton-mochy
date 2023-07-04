import styles from "./footer.module.css";
export const Map = () => {
  return (
    <div className={styles.footer_element}>
      <h5>Jak do nas trafić</h5>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d12501.982697419044!2d16.158937701896328!3d51.99067442326459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x4705c33fe4842f61%3A0xe0cd1c55d9b4bdb6!2sBetoniarnia%20Mochy%2C%20Szkolna%2019%2C%2064-234%20Mochy%2C%20Polska!3m2!1d51.993374599999996!2d16.1691628!5e1!3m2!1spl!2sus!4v1688321496874!5m2!1spl!2sus"
        width="300"
        height="170"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
