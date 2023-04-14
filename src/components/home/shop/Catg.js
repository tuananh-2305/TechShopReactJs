import React from "react";
import Data from "../../assets/data/Data";
const Catg = ({ mode }) => {
  const { catgData } = Data;
  return (
    <>
      <div
        className="category"
        style={{ background: mode ? "#3d090f" : "white" }}
      >
        <div
          className="chead d_flex"
          style={{ color: mode ? "white" : "black" }}
        >
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {catgData.map((data, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={data.cateImg} alt="" />
              <span>{data.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
