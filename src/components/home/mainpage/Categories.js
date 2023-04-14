import React, { useContext } from "react";
import Data from "../../assets/data/Data";
import { Context } from "../../../hook/useContext";
const Categories = () => {
  const { categories } = Data;
  const { mode } = useContext(Context);
  return (
    <>
      <div
        className="category"
        style={{
          background: mode ? "#003b48" : "white",
          color: mode ? "white" : "black",
        }}
      >
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
