import "./swapslot.css";
import UniswapDropdown from "./UniswapDropdown";
export default function SwapSlot() {
  return (
    <span className="swapslot">
      
      <input type="text" pattern="^[0-9]*[.,]?[0-9]*$"></input>
     
      <UniswapDropdown/>
    
    </span>
    
  );
}
