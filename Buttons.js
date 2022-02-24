import React from "react";
import "./menu.css";
const Buttons = ({ categories, items }) => {
  return (
    <div className="btn-container ">
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => items(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
