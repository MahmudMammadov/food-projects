import React, { Fragment, useState } from "react";
import "./navbar.css";
import "./cart.css";
import Buttons from "./Buttons";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import NavMobilebar from "./NavMobilebar";
import Cart from "./Cart";
import logo from "./imgs/logo.png";

const Navbar = ({
  categories,
  items,
  cart,
  addProduct,
  addProducts,
  reduceProduct,
  allCartProductDelete,
  oneRemoveProduct,
  menu,
  setMenuData,
}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [clickCart, setClickCart] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClickCloseCart = () => setClick(false);
  const handleClickCart = () => setClickCart(!clickCart);
  const checkNavbar = () => {
    if (window.scrollY > 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const allMenu = () => {
    setMenuData(menu);
  };
  window.addEventListener("scroll", checkNavbar);

  return (
    <Fragment>
      <nav className={navbar ? "navbar-item active" : "navbar-item"}>
        <div className="navbar-container-item">
          <div>
            <h1 className="nav-logo-item" onClick={allMenu}>
              <img src={logo} alt="logo" className="navbar-logo-img" />
            </h1>
          </div>
          <div onClick={handleClickCloseCart}>
            <Buttons categories={categories} items={items} />
          </div>
          <div className="nav-icones">
            <div className="cart-shop-value" onClick={handleClickCart}>
              <span
                className={
                  cart.length === 0 ? " hidden-shopcart" : "cart-value-length"
                }
              >
                {cart.length === 0 ? "" : cart.length}
              </span>
              <span
                className={
                  cart.length === 0 ? "icon-shop-item" : "hidden-shopcart"
                }
                onClick={handleClickCart}
              >
                <FaShoppingCart className="shop-icon-item" />
              </span>
            </div>

            <div className="menu-icon-item" onClick={handleClick}>
              {click ? <AiOutlineClose /> : <FaBars />}
            </div>
          </div>
          <div>
            <div className={clickCart ? "cart-active" : "cart-hidden"}>
              <Cart
                cart={cart}
                addProduct={addProduct}
                addProducts={addProducts}
                reduceProduct={reduceProduct}
                allCartProductDelete={allCartProductDelete}
                oneRemoveProduct={oneRemoveProduct}
                handleClickCart={handleClickCart}
              />
            </div>

            <div className="mobile-menu">
              <div className={click ? "nav-menu-item active" : "nav-menu-item"}>
                <NavMobilebar
                  categories={categories}
                  items={items}
                  handleClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
