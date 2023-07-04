const OffersComponents = [
  {
    component: <Header />,
    styleName: "header",
    witdh: false,
    id: "header",
  },
];
export const Offers = () => {
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
