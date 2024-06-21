import React from "react";

function Balance() {
  return (
    <div className="balance-main">
      <div className="balance-div">
        <p>
          <input id="balance-principal-id" type="text" placeholder="Enter a Principal ID"/>
        </p>
        <p className="trade-buttons">
          <button id="btn-request-balance">Check Balance</button>
        </p>
        <p id="balance-result">No Balance!</p>
      </div>
      <h1 className="balance-head">Balance</h1>
    </div>
  );
}

export default Balance;