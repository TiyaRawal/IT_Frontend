import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveToTop = () => {
    const startPosition = window.scrollY;
    const duration = 2000;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  };

  if (!showButton) {
    return null;
  }

  return (
    <button
      className="scroll-to-top"
      onClick={moveToTop}
      aria-label="Move to top"
    >
      <span className="scroll-shine"></span>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;