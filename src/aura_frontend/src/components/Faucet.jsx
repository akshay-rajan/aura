import React from "react";

function Faucet() {
  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free 10,000 Aura to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout">Redeem</button>
      </p>
    </div>
  );
}

export default Faucet;
