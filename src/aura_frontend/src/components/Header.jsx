import React from "react";

import Aura from "./Aura";

function Header() {
  return (
    <header>
      <div className="header-div" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            <img src="coin_logo1.jpg" id="coin-logo-1" alt="coin-logo"></img>
          </span>
          <Aura />
        </h1>
      </div>
    </header>
  );
}

export default Header;