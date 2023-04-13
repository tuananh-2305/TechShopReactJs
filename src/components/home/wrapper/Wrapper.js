import React from "react";
import "./style.css";
import Data from "../../assets/data/Data";
const Wrapper = () => {
  const { wrapperData } = Data;
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {wrapperData.map((data, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{data.cover}</i>
                </div>
                <h3>{data.title}</h3>
                <p>{data.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
