import React from "react";
import Product from "./CartComponent/Product";
import TopTitle from "./CartComponent/TopTitle";
import Payment from "./CartComponent/Payment";

export default function CartPage({ data, cart, setCart, updateQuantity }) {
  return (
    <div>
      {/* {cart.map(renderItem)} */}
      <TopTitle />
      <Product
        data={data}
        cart={cart}
        setCart={setCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
