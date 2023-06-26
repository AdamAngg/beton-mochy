import styles from "./home.module.css";
import { Header } from "../../UI/header/header";
import { Perks } from "./perks/perks";
import { About } from "./about/about";

const HomeComponents = [
  {
    component: <Header />,
    styleName: "header",
    witdh: false,
    id: "header",
  },
  {
    component: <Perks />,
    styleName: "perks",
    witdh: false,
    id: "perks",
  },
  {
    component: <About />,
    styleName: "about",
    witdh: false,
    id: "about",
  },
];
export const Home = () => {
  const HomeComponentsSections = HomeComponents.map((component, index) => {
    return (
      <section
        id={component.id}
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
