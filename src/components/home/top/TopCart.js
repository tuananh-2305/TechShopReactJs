import React from "react";
import Data from "../../assets/data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopCart = ({ mode }) => {
  const { topCart } = Data;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {topCart.map((data, index) => {
          return (
            <div className="box product" key={index}>
              <div className="nametop d_flex">
                <span className="tleft">{data.para}</span>
                <span className="tright">{data.desc}</span>
              </div>
              <div className="img">
                <img src={data.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
