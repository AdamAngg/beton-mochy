import styles from "./offers.module.css";
import { Header } from "@/components/UI/header/header";

export const Offers = ({ offer }) => {
  const OffersComponents = [
    {
      component: (
        <Header headerSlider={false} headerStatic={true} offer={offer} />
      ),
      styleName: "header",
      id: "header",
    },
  ];
  const OffersComponentsSections = OffersComponents.map((component, index) => {
    return (
      <section
        id={component.id}
        className={`${styles[component.styleName]} 
          }`}
        key={index}
      >
        {component.component}
      </section>
    );
  });
  return <>{OffersComponentsSections}</>;
};
