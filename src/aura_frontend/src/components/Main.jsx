import React from "react";

import Header from "./Header";
import Faucet from "./Faucet";

function Main(props) {
    return (
        <div className="main-div">
            <Header />
            <Faucet userPrincipal={props.userPrincipal} />
        </div>
    );
}

export default Main;
