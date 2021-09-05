import React from "react";

export default function Calculator({ total, cart }) {
  function renderTamTinh(total) {
    let tamTinh = 0;
    total.map((value) => {
      tamTinh += value;
    });
    return tamTinh;
  }

  const tongCong = renderTamTinh(total) + 15000;

  function updateQuantity() {}

  return (
    <div className="row calDiv">
      <div className="col-6 calText">Tạm Tính</div>
      <div className="col-6 calNumb">
        {renderTamTinh(total).toLocaleString()} <u>đ</u>
      </div>
      <div className="col-6 calText">Phí Vận Chuyển</div>
      <div className="col-6 calNumb">
        {renderTamTinh(total) ? "15.000" : "0"} <u>đ</u>
      </div>
      <div className="col-6 calText">Tổng Cộng</div>
      <div className="col-6 calNumb">
        {renderTamTinh(total) ? tongCong.toLocaleString() : "0"} <u>đ</u>
      </div>
    </div>
  );
}
