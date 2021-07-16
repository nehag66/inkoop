import React from "react";

const item1 = () => {
  return (
    <div className="grid-item item1">
      <span
        className="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "18%" }}
      >
        <h1 className="w3-bar-item">
          <b>
            Lorem <br />
            Ipsum
          </b>
        </h1>
        <a href="/" className="w3-bar-item w3-button">
          About
        </a>
        <a href="/" className="w3-bar-item w3-button">
          Services
        </a>
        <a href="/" className="w3-bar-item w3-button">
          Cuisine
        </a>
        <a href="/" className="w3-bar-item w3-button">
          Gallery
        </a>
        <a href="/" className="w3-bar-item w3-button">
          Contact
        </a>
        <a href="/" className="w3-bar-item w3-button">
          Book
        </a>
        <button className="w3-btn w3-red"> Cart</button>
      </span>
    </div>
  );
};

export default item1;
