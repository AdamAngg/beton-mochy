import styles from "./home.module.css";
import { Header } from "../../UI/header/header";
import { Perks } from "./perks/perks";

const HomeComponents = [
  {
    component: <Header />,
    styleName: "header",
    witdh: false,
  },
  {
    component: <Perks />,
    styleName: "perks",
    witdh: false,
  },
];
export const Home = () => {
  const HomeComponentsSections = HomeComponents.map((component, index) => {
    return (
      <section
        className={`${styles[component.styleName]} ${
          component.witdh ? styles.sectionWidth : ""
        }`}
        key={index}
      >
        {component.component}
      </section>
    );
  });
  return <>{HomeComponentsSections}</>;
};
