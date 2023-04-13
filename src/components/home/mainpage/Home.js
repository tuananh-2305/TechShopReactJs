import React from "react";
import Categories from "./Categories";
import SliderHome from "./Slide";

const Home = ({ mode }) => {
  return (
    <>
      <section
        className="home"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container d_flex">
          <Categories mode={mode} />
          <SliderHome mode={mode} />
        </div>
      </section>
    </>
  );
};

export default Home;
