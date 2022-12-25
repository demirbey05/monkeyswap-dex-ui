import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logoyazı.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const Menu = () => (
  <>
    <p>
      <a href="#swap">Swap</a>
    </p>
    <p>
      <a href="#pool">Pools</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="dex__navbar">
      <div className="dex__navbar-links">
        <div className="dex__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dex__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="dex__navbar-wallet">
        <ConnectButton label="Connect Wallet" />
      </div>
      <div className="dex__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#850000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#850000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="dex__navbar-menu_container scale-up-center">
            <div className="dex__navbar-menu_container-links" />
            <Menu />
            <div className="dex__navbar-menu_container-links-connect"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
