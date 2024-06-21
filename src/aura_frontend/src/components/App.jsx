import { useState } from 'react';
import { aura_backend } from 'declarations/aura_backend';

import Main from './Main';
import Balance from './Balance';
import Transfer from './Transfer';

function App() {

  return (
    <main id="screen">
      <Main />
      <Balance />
      <Transfer />
    </main>
  );
}

export default App;
