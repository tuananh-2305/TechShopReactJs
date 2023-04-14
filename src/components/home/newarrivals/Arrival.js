import React from "react";
import Data from "../../assets/data/Data";
const Arrival = ({ mode }) => {
  const { newArrivals } = Data;
  return (
    <>
      <div
        className="content grid product"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        {newArrivals.map((data, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={data.image} alt="" />
              </div>
              <h4 style={{ color: mode ? "white" : "black" }}>{data.name}</h4>
              <span>${data.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Arrival;
