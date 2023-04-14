import React, { useContext } from "react";
import "./style.css";
import Data from "../../assets/data/Data";
import { Context } from "../../../hook/useContext";
const Wrapper = () => {
  const { wrapperData } = Data;
  const { mode } = useContext(Context);
  return (
    <>
      <section
        className="wrapper background"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container grid2">
          {wrapperData.map((data, index) => {
            return (
              <div
                className="product"
                key={index}
                style={{
                  background: mode ? "#2e0e07" : "white",
                }}
              >
                <div className="img icon-circle">
                  <i>{data.cover}</i>
                </div>
                <h3 style={{ color: mode ? "white" : "black" }}>
                  {data.title}
                </h3>
                <p style={{ color: mode ? "white" : "black" }}>{data.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
