import styles from "./contact.module.css";
import { Grodzisk } from "./grodzisk/grodzisk";
import { Mochy } from "./mochy/mochy";

const ContactComponents = [
  {
    component: <Mochy />,
    styleName: "mochy",
    id: "mochy",
  },
  {
    component: <Grodzisk />,
    styleName: "grodzisk",
    id: "grodzisk",
  },
];
export const Contact = () => {
  const ContactComponentsSections = ContactComponents.map(
    (component, index) => {
      return (
        <section
          id={component.id}
          className={`${styles[component.styleName]} 
        `}
          key={index}
        >
          {component.component}
        </section>
      );
    }
  );
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>{ContactComponentsSections}</div>
    </div>
  );
};
