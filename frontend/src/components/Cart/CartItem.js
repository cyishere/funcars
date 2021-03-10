import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQty, removeFromCart } from "../../features/checkout/cartSlice";
import formatCurrency from "../../utils/formatCurrency";
import Button from "../Button";
import "./CartItem.scss";

const CartItem = ({ styleStatus, product }) => {
  const dispatch = useDispatch();

  // Update qty
  const handleQtyChange = (e) => {
    dispatch(
      updateQty({ productId: product.id, newQty: parseInt(e.target.value) })
    );
  };

  const deleteItemFromCart = (productInfo) => {
    console.log("product id:", productInfo);
    dispatch(removeFromCart(productInfo));
  };

  return (
    <div className={`cart-item ${styleStatus ? styleStatus : ""}`}>
      <div className="cart-item__cover">
        <img
          className="cart-item__cover-img"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="cart-item__info">
        <h3 className="cart-item__info-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="cart-item__actions">
          <Button
            styleStatus="link danger"
            onClickHandler={deleteItemFromCart}
            handlerArgs={{
              id: product.id,
              price: product.price,
              qty: product.qty,
            }}
          >
            Remove
          </Button>
        </div>
      </div>
      <div className="cart-item__meta">
        <div className="cart-item__count">
          <label htmlFor="qty">Qty:</label>
          <input
            type="number"
            id="qty"
            className="input-text small"
            value={product.qty}
            onChange={handleQtyChange}
            min="1"
            max={product.countInStock}
          />
        </div>
        <div className="cart-item__price">${formatCurrency(product.price)}</div>
      </div>
    </div>
  );
};

export default CartItem;
