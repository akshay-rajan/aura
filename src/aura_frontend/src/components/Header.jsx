import React from "react";

import Aura from "./Aura";

function Header() {
  return (
    <header>
      <div className="blue window" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            💎
          </span>
          <Aura />
        </h1>
      </div>
    </header>
  );
}

export default Header;