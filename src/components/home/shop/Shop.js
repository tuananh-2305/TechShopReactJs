import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, shopItems, mode }) => {
  return (
    <>
      <section
        className="shop background"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container d_flex">
          <Catg mode={mode} />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2 style={{ color: mode ? "white" : "black" }}>
                  Mobile Phones
                </h2>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart
                addToCart={addToCart}
                shopItems={shopItems}
                mode={mode}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
