import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";

import { canisterId, createActor } from "../../../declarations/aura_backend";
import { Principal } from "@dfinity/principal";


function Transfer(props) {
  
  let [reciever, setReciever] = useState("");
  let [amount, setAmount] = useState("");
  let [disabled, setDisable] = useState(false);
  let [feedback, setFeedback] = useState("");
  let [isHidden, setHidden] = useState(true);

  async function handleClick() {
    setDisable(true);
    const recipient = Principal.fromText(reciever);
    const amt = Number(amount);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.transfer(recipient, amt);

    setFeedback(result);
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="transfer-main">
      <h1 className="transfer-head">Transfer <br /> Tokens</h1>
      <div className="transfer-div">
        <div className="transfer">
        <div className="fieldset">
            <label>To Account:</label>
            <ul>
              <li>
                <input 
                  type="text" 
                  id="transfer-to-id" 
                  value={reciever} 
                  onChange={(e) => setReciever(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <div className="fieldset">
            <label>Amount:</label>
            <ul>
              <li>
                <input 
                  type="number" 
                  id="amount" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </li>
            </ul>
          </div>
          <p className="trade-buttons">
            <button id="btn-transfer" onClick={handleClick} disabled={disabled} >
              Transfer
            </button>
          </p>
          <p id="transfer-feedback" hidden={isHidden}>{feedback}</p>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
