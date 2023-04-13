import React from "react";
import Data from "../../assets/data/Data";
const Catg = () => {
  const { catgData } = Data;
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
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
