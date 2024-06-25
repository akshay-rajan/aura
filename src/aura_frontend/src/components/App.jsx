import { useState } from 'react';
import { aura_backend } from 'declarations/aura_backend';

import Main from './Main';
import Balance from './Balance';
import Transfer from './Transfer';
import Footer from './Footer';

function App() {

  return (
    <main id="screen">
      <Main />
      <Balance />
      <Transfer />
      <Footer />
    </main>
  );
}

export default App;
