import React from "react";

function Balance() {
  return (
    <div className="window white">
      <label>Check Balance:</label>
      <p>
        <input id="balance-principal-id" type="text" placeholder="Enter a Principal ID"/>
      </p>
      <p className="trade-buttons">
        <button id="btn-request-balance">Check Balance</button>
      </p>
      <p>This account has a balance of XYZ.</p>
    </div>
  );
}

export default Balance;