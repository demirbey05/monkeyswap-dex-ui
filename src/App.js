import "./App.css";
import SwapBar from "./components/SwapBar/SwapBar";

import { Navbar } from "./components";

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
