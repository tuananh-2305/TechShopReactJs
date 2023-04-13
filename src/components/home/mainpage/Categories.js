import React from "react";
import Data from "../../assets/data/Data";
const Categories = ({ mode }) => {
  const { categories } = Data;
  return (
    <>
      <div className="category">
        {categories.map((data, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={data.cateImg} alt="" />
              <span>{data.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
