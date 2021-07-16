import "./App.css";

import Item1 from "./components/item1";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import Item4 from "./components/item4";
function App(props) {
  return (
    <div className="grid-container">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

export default App;
