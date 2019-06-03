import React from 'react';
import logo from './logo.svg';
import './App.css';
import Decrement from './Components.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Decrement start='8'/>
      </header>
    </div>
  );
}

export default App;
