import React from "react";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+0834549697</label>
            <i className="fa fa-envelope"></i>
            <label>ptanh2305@gmail.com</label>
          </div>
          <div className="right f_flex">
            <div className="help">
              <span>Help</span>
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
