import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import Draw from './components/Draw';

function App() {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Simple Redux</h1>

      <div className="line">
        <Interval
          min={ min }
          max={ max }
          onMinChanged={ setMin }
          onMaxChanged={ setMax }
        />
      </div>

      <div className="line">
        <Sum min={ min } max={ max } />
        <Average min={ min } max={ max } />
        <Draw min={ min } max={ max } />
      </div>
    </div>
  );
}

export default App;
