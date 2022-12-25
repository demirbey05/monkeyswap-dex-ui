import "./App.css";
import SwapBar from "./components/SwapBar/SwapBar";

import { Navbar } from "./components";
import FiatOnramper from "./components/FiatOnramper";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <SwapBar />
    </div>
  );
}

export default App;
