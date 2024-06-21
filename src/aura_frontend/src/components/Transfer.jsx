import React from "react";

function Transfer() {
  return (
    <div className="transfer-main">
      <h1 className="transfer-head">Transfer <br /> Tokens</h1>
      <div className="transfer-div">
        <div className="transfer">
        <div className="fieldset">
            <label>To Account:</label>
            <ul>
              <li>
                <input type="text" id="transfer-to-id"/>
              </li>
            </ul>
          </div>
          <div className="fieldset">
            <label>Amount:</label>
            <ul>
              <li>
                <input type="number" id="amount"/>
              </li>
            </ul>
          </div>
          <p className="trade-buttons">
            <button id="btn-transfer">
              Transfer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
