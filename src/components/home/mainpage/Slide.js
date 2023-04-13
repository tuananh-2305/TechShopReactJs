import React from "react";
import SlideCard from "./SlideCard";
import "./Home.css";
const SliderHome = ({ mode }) => {
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <SlideCard mode={mode} />
        </div>
      </section>
    </>
  );
};

export default SliderHome;
