import React from "react";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../redux/reducer";

const Footer = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode.mode);
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <div className="logo">
              <span>
                T<p>Anh</p>
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>277A/3 An Thanh, Thuan An , Binh Duong Province </li>
              <li>Email: ptanh2305p@gmail.com</li>
              <li>Phone: +84 834549697</li>
            </ul>
          </div>
          <div className="darkMode">
            <button onClick={() => dispatch(changeMode())}>
              {mode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
