import React, { useState, useEffect } from "react";
import Sliderbardata from "./Sliderbardata";
import menuSlider from "./sliderdata";
import Arrow from "./Arrow";
const sliderLastElemet = menuSlider.length - 1;
const Sliderbar = () => {
  const [stateIndex, setstateIndex] = useState(0);
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setstateIndex(stateIndex === sliderLastElemet ? 0 : stateIndex + 1);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [stateIndex]);

  const checkNumber = (number) => {
    if (number > menuSlider.length - 1) {
      return 0;
    }
    if (number < 0) {
      return menuSlider.length - 1;
    }
    return number;
  };
  const nextBtn = () => {
    setstateIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevBtn = () => {
    setstateIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div className="slider-container-item">
      <div className="slider-container">
        <Sliderbardata stateIndex={stateIndex} menuSlider={menuSlider} />
        <Arrow prevBtn={prevBtn} nextBtn={nextBtn} />
      </div>
    </div>
  );
};

export default Sliderbar;
