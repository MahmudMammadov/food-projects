import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import menu from "./data";
import Footer from "./Footer";
import Slider from "./Slider";

const allCartProductLocal = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return (cart = JSON.parse(localStorage.getItem("cart")));
  } else {
    return [];
  }
};
const allButtons = ["Menu", ...new Set(menu.map((item) => item.category))];
const Food = () => {
  const [menuData, setMenuData] = useState(menu);
  const [categories] = useState(allButtons);
  const [cart, setCart] = useState(allCartProductLocal());

  const items = (category) => {
    console.log(category);
    if (category === "Menu") {
      setMenuData(menu);
      return;
    } else {
      const newItem = menu.filter((item) => item.category === category);
      setMenuData(newItem);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCartProduct = (product) => {
    const Product = cart.find((item) => item.id === product.id);
    if (Product) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...Product, productValue: Product.productValue + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, productValue: 1 }]);
    }
  };
  const oneRemoveProduct = (product) => {
    const deletProducts = cart.filter((item) => item.id !== product.id);
    setCart(deletProducts);
  };
  const reduceProduct = (product) => {
    const Product = cart.find((item) => item.id === product.id);
    if (Product.productValue === 1) {
      const reduceProductValue = cart.filter((item) => item.id !== product.id);
      setCart(reduceProductValue);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...Product, productValue: Product.productValue - 1 }
            : item
        )
      );
    }
  };
  const addProducts = (product) => {
    const addCartProducts = cart.find((item) => item.id === product.id);
    if (addCartProducts) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...addCartProducts,
                productValue: addCartProducts.productValue + 1,
              }
            : item
        )
      );
    }
  };
  const allCartProductDelete = () => {
    setCart([]);
  };

  return (
    <div>
      <div>
        <Navbar
          categories={categories}
          items={items}
          cart={cart}
          addProducts={addProducts}
          reduceProduct={reduceProduct}
          allCartProductDelete={allCartProductDelete}
          oneRemoveProduct={oneRemoveProduct}
          menu={menu}
          setMenuData={setMenuData}
        />
        <Slider />
        <Menu menu={menuData} addToCartProduct={addToCartProduct} />
        <Footer categories={categories} />
      </div>
    </div>
  );
};

export default Food;
