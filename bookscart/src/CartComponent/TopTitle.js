import React, { useState, useEffect } from "react";
import { FaWifi, FaBatteryFull, FaSignal } from "react-icons/fa";

export default function TopTitle() {
  const [curTime, setCurTime] = useState(null);

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setCurTime(hours + ":" + min);
  }, []);
  return (
    <div>
      <nav className="navOrange">
        <i>
          <FaWifi className="icon" />
        </i>
        <i>
          <FaSignal className="icon" />
        </i>
        <i>
          <FaBatteryFull className="icon rotate" />
        </i>
        <span>{curTime}</span>
      </nav>
      <h1 className="gioHangText">Giỏ Hàng</h1>
    </div>
  );
}
