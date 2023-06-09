import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <>
      <Head />
      <Search mode={mode} />
      <Navbar mode={mode} />
    </>
  );
};

export default Header;
