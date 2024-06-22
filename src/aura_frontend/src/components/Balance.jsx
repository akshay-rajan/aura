import React, { useState } from "react";

import { Principal } from "@dfinity/principal";
import { aura_backend } from "../../../declarations/aura_backend";


function Balance() {

  let [inputValue, setInput] = useState("");
  let [balanceResult, setBalance] = useState("");
  let [hidden, setHidden] = useState(true);

  let [symbol, setSymbol] = useState("");

  // Check Balance
  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const bal = await aura_backend.balanceOf(principal);
    setBalance(bal.toLocaleString());
    setSymbol(await aura_backend.getSymbol());
    setHidden(false);
  }

  return (
    <div className="balance-main">
      <div className="balance-div">
        <p>
          <input 
            id="balance-principal-id" 
            type="text" 
            placeholder="Enter a Principal ID" 
            value={inputValue} 
            onChange={(e) => setInput(e.target.value)} 
          />
        </p>
        <p className="trade-buttons">
          <button id="btn-request-balance" onClick={handleClick}>Check Balance</button>
        </p>
        <p id="balance-result" hidden={hidden}>This account has a balance of {balanceResult} {symbol}</p>
      </div>
      <h1 className="balance-head">Balance</h1>
    </div>
  );
}

export default Balance;