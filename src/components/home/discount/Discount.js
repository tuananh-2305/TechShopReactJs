import React, { useContext } from "react";
import Dcard from "./Dcard";
import Gift from "./../../assets/images/gift.png";
import { Context } from "../../../hook/useContext";
const Discount = () => {
  const { mode } = useContext(Context);
  return (
    <>
      <section
        className="Discount background NewArrivals"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src={Gift} alt="" />
              <h2 style={{ color: mode ? "white" : "black" }}>Big Discounts</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard mode={mode} />
        </div>
      </section>
    </>
  );
};

export default Discount;
