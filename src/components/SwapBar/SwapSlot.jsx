import "./swapslot.css";

export default function SwapSlot({ slotValue, onChange }) {
  console.log(slotValue);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      onChange(0);
    }
    if (!isNaN(parseInt(e.target.value))) {
      onChange(parseInt(e.target.value));
    }
  };
  return (
    <span className="swapslot">
      <input value={slotValue} type="text" onChange={handleChange}></input>
    </span>
  );
}
