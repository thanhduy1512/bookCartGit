import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import Spinner from "../Spinner";
import Banners from "./Banners";
import { FaWifi, FaBatteryFull, FaSignal } from "react-icons/fa";

export default function HeadBanner() {
  const bannersUrl = "https://tiki.vn/api/v2/widgets/banners_home";
  const [curTime, setCurTime] = useState(null);

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    setCurTime(hours + ":" + min);
  }, []);

  const { data, error, loading } = useFetch(bannersUrl);
  if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <nav className="nav">
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
      <Banners banners={data.row1} />
      <img
        src="./saleDocNhat.png"
        style={{ width: "360px", marginTop: "15px", marginBottom: "-5px" }}
      ></img>
    </div>
  );
}
