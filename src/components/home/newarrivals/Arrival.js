import React from "react";
import Data from "../../assets/data/Data";
const Arrival = () => {
  const { newArrivals } = Data;
  return (
    <>
      <div className="content grid product">
        {newArrivals.map((data, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={data.image} alt="" />
              </div>
              <h4>{data.name}</h4>
              <span>${data.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Arrival;
