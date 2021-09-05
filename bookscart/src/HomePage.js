import React from "react";
import FlashSale from "./HomeComponents/FlashSale";
import HeadBanner from "./HomeComponents/HeadBanner";
import SuperSale from "./HomeComponents/SuperSale";
import UniqueSale from "./HomeComponents/UniqueSale";

export default function HomePage(props) {
  return (
    <div className="homePage">
      <HeadBanner />
      <UniqueSale addToCart={props.addToCart} />
      <SuperSale addToCart={props.addToCart} />
      <FlashSale addToCart={props.addToCart} />
    </div>
  );
}
