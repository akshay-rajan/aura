import { useState } from 'react';
import { aura_backend } from 'declarations/aura_backend';

import Header from './Header';
import Faucet from './Faucet';
import Balance from './Balance';
import Transfer from './Transfer';

function App() {

  return (
    <main id="screen">
      <Header />
      <Faucet />
      <Balance />
      <Transfer />
    </main>
  );
}

export default App;
