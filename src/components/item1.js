import React from "react";

const item1 = () => {
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  return (
    <div className="grid-item item1" id="mySidebar">
      {/* <span
        className="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "18%" }}
      > */}
      <div className="sidebar">
        <button onClick={() => w3_close()} className="button-close">
          Close &times;
        </button>
        <h1>
          <b>
            Lorem <br />
            Ipsum
          </b>
        </h1>
        <h4>
          <div>About</div>
          <div>Services</div>
          <div>Cuisine</div>
          <div>Gallery</div>
          <div>Contact</div>
          <div>Book</div>
        </h4>
        <button className="item1-button"> Cart</button>
      </div>
    </div>
  );
};

export default item1;
