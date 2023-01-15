import SwapSlot from "./SwapSlot";

import "./swapbar.css";

export default function SwapBar() {
  return (
    <div className="swapbar">
      <SwapSlot />
      <br />
      <SwapSlot />
      <button className="button-62" role="button">
        Swap
      </button>
    </div>
  );
}
