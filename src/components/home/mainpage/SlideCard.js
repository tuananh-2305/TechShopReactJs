import React from "react";
import Data from "../../assets/data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = ({ mode }) => {
  const { slideData } = Data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {slideData.map((data, index) => {
          return (
            <div key={index}>
              <div className="box d_flex top">
                <div className="left">
                  <h1 style={{ color: mode ? "white" : "black" }}>
                    {data.title}
                  </h1>
                  <p style={{ color: mode ? "white" : "black" }}>{data.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div className="right">
                  <img src={data.cover} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
