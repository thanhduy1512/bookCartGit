import React from "react";
import { CgHome } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const activeStyle = {
  color: "#fc820a",
};

export default function BottomBar() {
  return (
    <div
      className="row bottomBar"
      style={{
        height: "56px",
        width: "360px",
        backgroundColor: "white",
        padding: "0px",
        margin: "0px",
      }}
    >
      <NavLink activeStyle={activeStyle} to="/" className="col-6 btn">
        <CgHome className="bottomBarIcons" />
        <p>Trang Chủ</p>
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/cart" className="col-6 btn">
        <AiOutlineShoppingCart className="bottomBarIcons" />
        <p>Giỏ Hàng</p>
      </NavLink>
    </div>
  );
}
