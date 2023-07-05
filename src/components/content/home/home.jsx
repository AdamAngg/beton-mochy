import styles from "./home.module.css";
import { renderAnimation } from "@/helpers/renderAnimation.helper";
import { Perks } from "./perks/perks";
import { About } from "./about/about";
import { Offer } from "./offer/offer";
import { Branch } from "./branch/branch";
import { Footer } from "@/components/UI/footer/footer";

const HomeComponents = [
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
  {
    component: <Offer />,
    styleName: "offer",
    witdh: false,
    id: "offer",
  },
  {
    component: <Branch />,
    styleName: "branch",
    witdh: false,
    id: "branch",
  },
];
export const Home = () => {
  const HomeComponentsSections = HomeComponents.map((component, index) => {
    renderAnimation();
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
