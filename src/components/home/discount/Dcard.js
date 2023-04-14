import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../assets/data/Data";
const Dcard = ({ mode }) => {
  const { disCount } = Data;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {disCount.map((data, index) => {
          return (
            <div className="box product" key={index}>
              <div className="img">
                <img src={data.image} alt="" width="100%" />
              </div>
              <h4 style={{ color: mode ? "white" : "black" }}>{data.name}</h4>
              <span>{data.price}</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
