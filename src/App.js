import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import Draw from './components/Draw';

function App() {
  return (
    <div className="App">
      <h1>Simple Redux</h1>

      <div className="line">
        <Interval
        />
      </div>

      <div className="line">
        <Sum />
        <Average />
        <Draw />
      </div>
    </div>
  );
}

export default App;
