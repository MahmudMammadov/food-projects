import React from "react";
import "./slider.css";
const Sliderbardata = ({ stateIndex, menuSlider }) => {
  return (
    <div className="silder-img-container">
      {menuSlider.map((item, index) => {
        const { img } = item;
        return (
          <article
            className={index === stateIndex ? "active-item" : "inactive"}
            key={index}
          >
            <div>
              <img src={img} alt={"img"} className="slide-image" />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Sliderbardata;
