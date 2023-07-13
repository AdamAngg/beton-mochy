import { gsap } from "gsap";
import { useEffect } from "react";
import stylesHome from "../../src/components/content/home/home.module.css";
import stylesPerks from "../components/content/home/perks/perks.module.css";
import stylesAbout from "../components/content/home/about/about.module.css";

export const renderAnimation = () => {
  useEffect(() => {
    const handleIntersection = (entry) => {
      const perks = document.querySelectorAll(
        `.${stylesPerks.column_container}`
      );
      const perksTitle = document.querySelector(
        `.${stylesPerks.main_title_wrapper}`
      );
      const tlPerks = gsap.timeline();
      tlPerks.to(perksTitle, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
      tlPerks.to(Array.from(perks), {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: { each: 0.2 },
      });

      if (
        entry[0]?.isIntersecting &&
        entry[0]?.target.classList[0] === `${stylesHome.perks}`
      )
        tlPerks.play();
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
    });

    const sections = document.querySelectorAll([`.${stylesHome.perks}`]);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
};
