import React from "react";
import "./slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Arrow = ({ prevBtn, nextBtn }) => {
  return (
    <div className="arrows">
      <button className="prevBtn" onClick={prevBtn}>
        <AiOutlineArrowLeft />
      </button>
      <button className="nextBtn" onClick={nextBtn}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Arrow;
