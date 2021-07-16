import React from "react";
import MexianTaco from "../assets/mexican taco.png";
import FarmhousePizza from "../assets/farmhouse pizza.png";
import ChickenBurger from "../assets/chicken burger.png";
import LoadedNachos from "../assets/loaded nachos.png";
import HakkaNoodles from "../assets/hakka noodles.png";

const item4 = () => {
  return (
    <div className="grid-item item4">
      <div className="grid">
        <div class="card">
          <img src={MexianTaco} alt="mexicantaco" className="images" />
          <div class="container">
            <h4>
              <b>Mexican Taco</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={FarmhousePizza} alt="farmhousepizza" className="images" />
          <div class="container">
            <h4>
              <b>Farmhouse Pizza</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={ChickenBurger} alt="chickenburger" className="images" />
          <div class="container">
            <h4>
              <b>Chicken Burger</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={LoadedNachos} alt="loadednachos" className="images" />
          <div class="container">
            <h4>
              <b>Loaded Nachos</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={HakkaNoodles} alt="hakkanoodles" className="images" />
          <div class="container">
            <h4>
              <b>Hakka Noodles</b>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default item4;
