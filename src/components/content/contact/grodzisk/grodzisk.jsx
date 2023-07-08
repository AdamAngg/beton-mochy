import styles from "./grodzisk.module.css";
export const Grodzisk = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24861.233784882534!2d16.359646!3d52.245848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705ccd41903ff81%3A0xb54708cdf5b675ab!2sRolna%2C%2062-065%20Grodzisk%20Wielkopolski%2C%20Polska!5e1!3m2!1spl!2sus!4v1688820670457!5m2!1spl!2sus"
        width="700"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer"
      ></iframe>
    </div>
  );
};
