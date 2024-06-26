import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";

import { aura_backend, canisterId, createActor } from "../../../declarations/aura_backend";

function Faucet() {
  
  const [isDisabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Redeem");

  // Redeem the tokens to the user's account
  async function handleClick() {
    setDisabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    // Create an authenticated canister
    // This canister's principal id is used for calling the method from
    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    // const res = await aura_backend.payOut();
    const res = await authenticatedCanister.payOut();
    setButtonText(res);
  }

  return (
    <div className="faucet-div">
      <h2>
        Faucet
      </h2>
      <label>Get your free 10,000 Aura to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>{buttonText}</button>
      </p>
    </div>
  );
}

export default Faucet;
