import { useEffect } from "react";
import "../../App.css"

const ScrollAnimationHandler = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = document.querySelectorAll(".scroll-animate");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; 
};

export default ScrollAnimationHandler;
