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

      tlPerks.fromTo(
        Array.from(perks),
        { opacity: 0, x: 1000 },
        { opacity: 0.5, x: 0, duration: 0.5, stagger: { each: 0.1 } }
      );

      if (entry[0].isIntersecting) {
        tlPerks.play();
      } else {
        tlPerks.reverse(0);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });

    const sections = document.querySelectorAll(`.${stylesHome.perks}`);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
};
