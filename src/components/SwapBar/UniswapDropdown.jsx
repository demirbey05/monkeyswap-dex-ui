import React, { useState } from 'react';
import './UniswapDropdown.css';

const options = ["XWP", "YWP"];

function UniswapDropdown({ onSelect }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="uniswap-dropdown">
      <div className="selected-option" onClick={() => setDisplayMenu(!displayMenu)}>
        {selectedOption}
        <i className="arrow down"></i>
      </div>
      {displayMenu ? (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => {
              setSelectedOption(option);
              setDisplayMenu(false);
              onSelect(option);
            }}>{option}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UniswapDropdown;
