import React from "react";
import Home from "../components/home/mainpage/Home";
import FlashDeals from "../components/home/flashDeals/FlashDeals";
import TopCate from "../components/home/top/TopCate";
import Discount from "../components/home/discount/Discount";
import Shop from "../components/home/shop/Shop";
import Annocument from "../components/home/annocument/Annocument";
import Wrapper from "../components/home/wrapper/Wrapper";
import NewArrivals from "../components/home/newarrivals/NewArrivals";
import { useSelector } from "react-redux";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <>
      <Home cartItem={cartItem} mode={mode} />
      <FlashDeals
        productItems={productItems}
        addToCart={addToCart}
        mode={mode}
      />
      <TopCate mode={mode} />
      <NewArrivals mode={mode} />
      <Discount mode={mode} />
      <Shop addToCart={addToCart} shopItems={shopItems} mode={mode} />
      <Annocument mode={mode} />
      <Wrapper mode={mode} />
    </>
  );
};

export default Pages;
