import React, { useContext } from "react";
import Banner1 from "./../../assets/images/banner-1.png";
import Banner2 from "./../../assets/images/banner-2.png";
import { Context } from "../../../hook/useContext";
const Annocument = () => {
  const { mode } = useContext(Context);
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section
        className="annocument background"
        style={{ background: mode ? "#121f29" : "white", padding: "30px 0" }}
      >
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src={Banner1} width="100%" height="100%" alt="" />
          </div>
          <div className="img" style={mystyle1}>
            <img src={Banner2} width="100%" height="100%" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
