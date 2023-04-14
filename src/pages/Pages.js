import React from "react";
import Home from "../components/home/mainpage/Home";
import FlashDeals from "../components/home/flashDeals/FlashDeals";
import TopCate from "../components/home/top/TopCate";
import Discount from "../components/home/discount/Discount";
import Shop from "../components/home/shop/Shop";
import Annocument from "../components/home/annocument/Annocument";
import Wrapper from "../components/home/wrapper/Wrapper";
import NewArrivals from "../components/home/newarrivals/NewArrivals";

const Pages = () => {
  return (
    <>
      <Home />
      <FlashDeals />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;
