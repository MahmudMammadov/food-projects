import React from "react";
import "./navbar.css";
const NavMobilebar = ({ categories, items, handleClick }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              handleClick();
              items(category);
            }}
            className="nav-text"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default NavMobilebar;
