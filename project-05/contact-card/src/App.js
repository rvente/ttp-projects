import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          name='Ralph Vente'
          business='Platinum Edge Tutoring'
          number='W: (347) 792-9426'
        />
        <Card
          name='Terrell Williams'
          business='MIPS Technologies'
          number='M: (123) 456-789'
        />
        <Card
          name='Jean-Jacques Picard'
          business='The Federation'
          number='(170) 117-0170'
        />
      </header>
    </div>
  );
}



export default App;
