import React from "react";

export default function Payment({ total, cart, setCart }) {
  function renderTamTinh(total) {
    let tamTinh = 0;
    total.map((value) => {
      tamTinh += value;
    });
    return tamTinh;
  }

  function thanhToan(cart) {
    setCart([]);
  }
  const tongCong = renderTamTinh(total) + 15000;
  return (
    <div className="paymentBar">
      <div className="row">
        <div className="col-6">Tổng Cộng</div>
        <div className="col-6 ">
          {renderTamTinh(total) ? tongCong.toLocaleString() : "0"} <u>đ</u>
        </div>
        <hr
          style={{
            color: "#808089",
            width: "328px",
            height: "1px",
            marginBottom: "-2px",
            marginLeft: "16px",
            marginTop: "4px",
          }}
        ></hr>
        <button
          className="thanhToan"
          onClick={() => {
            thanhToan();
          }}
        >
          Thanh Toán
        </button>
        <hr
          style={{
            color: "#808089",
            width: "360px",
            height: "4px",
            marginBottom: "-2px",
          }}
        ></hr>
      </div>
    </div>
  );
}
