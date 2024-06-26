import { useState } from 'react';
import { aura_backend } from 'declarations/aura_backend';

import Main from './Main';
import Balance from './Balance';
import Transfer from './Transfer';
import Footer from './Footer';

function App(props) {

  return (
    <main id="screen">
      <Main userPrincipal={props.user} />
      <Balance />
      <Transfer userPrincipal={props.user} />
      <Footer />
    </main>
  );
}

export default App;
