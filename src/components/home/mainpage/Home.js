import React, { useContext } from "react";
import Categories from "./Categories";
import SliderHome from "./Slide";
import { Context } from "../../../hook/useContext";

const Home = () => {
  const { mode } = useContext(Context);
  return (
    <>
      <section
        className="home"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container d_flex">
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;
