import { gsap } from "gsap";
import { useEffect } from "react";
import stylesPerks from "../components/content/home/perks/perks.module.css";
import stylesHome from "../components/content/home/home.module.css";
export const renderAnimation = () => {
  useEffect(() => {
    const handleIntersection = (entry) => {
      const perks = document.querySelectorAll(
        `.${stylesPerks.column_container}`
      );

      const tlPerks = gsap.timeline();

      tlPerks.to(Array.from(perks), {
        opacity: 0.5,
        x: 0,
        duration: 0.5,
        stagger: { each: 0.2 },
      });

      if (entry[0].isIntersecting) {
        tlPerks.play();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.9,
    });

    const sections = document.querySelectorAll(`.${stylesHome.perks}`);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
};
