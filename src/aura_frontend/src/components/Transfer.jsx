import React from "react";

function Transfer() {
  return (
    <div className="transfer-main">
      <h1 className="transfer-head">Transfer <br /> Tokens</h1>
      <div className="transfer-div">
        <div className="transfer">
          <fieldset>
            <legend>To Account:</legend>
            <ul>
              <li>
                <input type="text" id="transfer-to-id"/>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Amount:</legend>
            <ul>
              <li>
                <input type="number" id="amount"/>
              </li>
            </ul>
          </fieldset>
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
