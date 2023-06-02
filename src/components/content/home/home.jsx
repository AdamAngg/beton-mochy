import styles from "./home.module.css";
import { Header } from "../../UI/header/header";
const HomeComponents = [
  {
    component: <Header />,
    witdh: false,
  },
];
export const Home = () => {
  const HomeComponentsSections = HomeComponents.map((component, index) => {
    return (
      <section
        className={`${component.witdh ? styles.sectionWidth : ""}`}
        key={index}
      >
        {component.component}
      </section>
    );
  });
  return <>{HomeComponentsSections}</>;
};
