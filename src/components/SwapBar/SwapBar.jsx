import SwapSlot from "./SwapSlot";

import "./swapbar.css";
import { useState } from "react";
export default function SwapBar() {
  const [swapSlotOne, setSwapSlotOne] = useState(0);
  // For storing the value entered into input 1
  const [swapSlotTwo, setSwapSlotTwo] = useState(0);
  // For storing the value entered into input 2
  return (
    <div className="swapbar">
      <SwapSlot slotValue={swapSlotOne} onChange={setSwapSlotOne} />
      <br />
      <SwapSlot slotValue={swapSlotTwo} onChange={setSwapSlotTwo} />
      <button className="button-62" role="button">
        Swap
      </button>
    </div>
  );
}
