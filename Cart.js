import React, { Fragment } from "react";
import "./cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({
  cart,
  addProducts,
  reduceProduct,
  allCartProductDelete,
  oneRemoveProduct,
  handleClickCart,
}) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.productValue * item.price,
    0
  );

  return (
    <Fragment>
      <div className="cart-container">
        <div className="cart-items-all">
          <div className="cart-hidden-products" onClick={handleClickCart}>
            <AiOutlineClose className="cart-close-icone" />
          </div>
          {cart.map((item) => (
            <article key={item.id} className="cart-products">
              <div className="cart-products-list">
                <div>
                  <img src={item.img} alt={item.title} className="cart-img" />
                </div>
                <div>
                  <h5 className="cart-product-title">{item.title}</h5>
                </div>

                <div className="cart-price-container">
                  <h3 className="cart-product-price">{item.price} $</h3>
                </div>
                <div className="cart-btn-container">
                  <button
                    className="cart-forms-btn "
                    onClick={() => addProducts(item)}
                  >
                    +
                  </button>

                  <h3 className="cart-product">{item.productValue}</h3>

                  <button
                    className="cart-forms-btn "
                    onClick={() => reduceProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    className="remove-product"
                    onClick={() => oneRemoveProduct(item)}
                  >
                    <MdDeleteForever className="remove-product-item" />
                  </button>
                </div>
              </div>
            </article>
          ))}
          <div className="cart-empty">
            {cart.length === 0 && (
              <span className="empty-basket">Empty Basket</span>
            )}
          </div>
        </div>

        <div className="cart-total">
          <span className="cart-total-text">Total price:</span>
          <div className="cart-total-price">
            <span> ${totalPrice}</span>
          </div>
        </div>
        <div className="cart-delete-all-product">
          {cart.length > 1 && (
            <button
              className="cart-delete-btn"
              onClick={() => allCartProductDelete()}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
