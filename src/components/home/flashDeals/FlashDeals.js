import React, { useContext } from "react";
import FlashCard from "./FlashCard";
import { Context } from "../../../hook/useContext";
const FlashDeals = () => {
  const { mode } = useContext(Context);
  return (
    <>
      <section
        className="flash"
        style={{ background: mode ? "#121f29" : "white", padding: "30px 0" }}
      >
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1 style={{ color: mode ? "white" : "black" }}>Flash Deals</h1>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
