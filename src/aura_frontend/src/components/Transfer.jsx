import React from "react";

function Transfer() {
  return (
    <div className="window white">
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
  );
}

export default Transfer;
