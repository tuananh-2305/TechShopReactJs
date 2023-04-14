import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../hook/useContext";

const Search = ({ mode }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const { cartItem } = useContext(Context);
  return (
    <>
      <section
        className="search"
        style={{ background: mode ? "#121f29" : "white" }}
      >
        <div className="container c_flex">
          <div className="logo width ">
            <span>
              T<p>Anh</p>
            </span>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <div className="cartQty">
                  <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
