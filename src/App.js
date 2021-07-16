import "./App.css";

import Item2 from "./components/item2";
import Item3 from "./components/item3";
import Item4 from "./components/item4";

function App(props) {
  function w3_open() {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById("mySidebar").style.display = "inline-block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <div>
      <button className="button-open" onclick={() => w3_open()}>
        ☰
      </button>
      <div className="grid-container">
        <div className="grid-item item1" id="mySidebar">
          <span
            className="w3-sidebar w3-light-grey w3-bar-block"
            style={{ width: "18%" }}
          >
            <button onclick={() => w3_close()} className="button-close">
              Close &times;
            </button>
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
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </div>
  );
}

export default App;
