import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Context } from "../../../hook/useContext";

const FlashCard = () => {
  const { addToCart, productItems, mode } = useContext(Context);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-long-arrow-alt-left"></i>
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems, index) => {
          return (
            <div className="box" key={index}>
              <div
                className="product mtop"
                style={{ background: mode ? "#3f4777" : "white" }}
              >
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.image} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i class="fa-solid fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3 style={{ color: mode ? "white" : "black" }}>
                    {productItems.name}
                  </h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${productItems.price}.00 </h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
