import styles from "./home.module.css";
import { Header } from "./header/header";
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
        className={`${component.witdh ? styles.sectionWidth : styles.section}`}
        key={index}
      >
        {component.component}
      </section>
    );
  });
  return <>{HomeComponentsSections}</>;
};
