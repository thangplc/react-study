import logo from "./logo.svg";
import "./App.css";

import BT1 from "./lession-1/BT1";
import { Home } from "./lession-1/BT2";
import HeroicFeatures from "./lession-1/BT3";
import DataBinding from "./lession-1/DataBinding/DataBinding";
import HandlingEvents from "./lession-2/handling-event/HandlingEvents";

// import ClassComponent from './DemoComponent/ClassComponent'
// import FuntionComponent from "./DemoComponent/FuntionComponent";

function App() {
  return (
    <div className="App">
      {/* Lession 1 */}
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
       */}
      {/* <BT1 /> */}
      {/* Bai tap 2 */}
      {/* <Home /> */}
      {/* <HeroicFeatures /> */}
      {/* Data binding */}
      {/* <DataBinding /> */}
      <HandlingEvents />
    </div>
  );
}

export default App;
