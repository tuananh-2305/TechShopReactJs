import React from "react";
import Arrival from "./Arrival";
import "./style.css";
import NewLogo from "./../../assets/images/newlogo.png";
const NewArrivals = ({ mode }) => {
  return (
    <>
      <section
        className="NewArrivals background"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src={NewLogo} alt="" />
              <h2 style={{ color: mode ? "white" : "black" }}>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Arrival mode={mode} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
