import React, { useState } from "react";
import Calculator from "./Calculator";
import Payment from "./Payment";

export default function Product({ data, cart, setCart, updateQuantity }) {
  if (data) {
    var products = data.data;
  }

  const total = [];

  function renderItem(itemInCart) {
    const { id, quantity } = itemInCart;

    const { thumbnail_url, name, discount, price } = products.find(
      (p) => p.id === parseInt(id)
    );
    const productPrice = discount ? discount : price;
    const oneProductPrice = quantity * productPrice;
    return (
      total.push(oneProductPrice),
      (
        <div className="product">
          <a
            onClick={() => {
              updateQuantity(id, 0);
            }}
            className="deleteButton"
          >
            X
          </a>
          <div className="row">
            <img className="col-6 productImg" src={thumbnail_url}></img>
            <p className="col-6">{name}</p>
            {discount ? (
              <span>
                {discount.toLocaleString()} <u>đ</u>{" "}
                <s>
                  {price.toLocaleString()} <u>đ</u>
                </s>
              </span>
            ) : (
              <span>
                {price.toLocaleString()} <u>đ</u>
              </span>
            )}
          </div>

          <div className="quantityButtons">
            <button
              className="updateQuantityButtons"
              onClick={() => {
                quantity > 1 ? updateQuantity(id, -1) : updateQuantity(id, 0);
              }}
            >
              {" "}
              -{" "}
            </button>
            <button>{quantity}</button>
            <button
              className="updateQuantityButtons"
              onClick={() => {
                updateQuantity(id, 1);
              }}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <hr
            style={{
              color: "#808089",
              width: "296px",
              height: "2px",
              marginLeft: "16px",
            }}
          ></hr>
        </div>
      )
    );
  }
  return (
    <div className="detailCart">
      <p>Chi Tiết Đơn Hàng</p>
      <div className="productCart">
        <div>{cart ? cart.map(renderItem) : ""}</div>
        <Calculator total={total} cart={cart} />
      </div>
      <Payment total={total} cart={cart} setCart={setCart} />
    </div>
  );
}
