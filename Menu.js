import React from "react";
import "./menu.css";

const Menu = ({ menu, addToCartProduct }) => {
  return (
    <div className="menu-container">
      {menu.map((menuDatas) => {
        const { id, title, desc, price, img } = menuDatas;
        return (
          <div className="menu-container-items">
            <article key={id} className="menu-container-item">
              <div className="menu-photos">
                <img className="menu-photo" src={img} alt={title} />
              </div>
              <div className="text">
                <h4 className="menu-name-item">{title}</h4>
                <p className="menu-text-item">{desc}</p>
                <h4 className="menu-price">{price}$</h4>
              </div>
              <button
                className="menu-add-btn"
                onClick={() => addToCartProduct(menuDatas)}
              >
                Add to Cart
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
