import React from 'react';
import AppRouter from './components/navbar.jsx';

//Importing Style
import './App.css';
import './components/navbar.css';
import './components/CityCard.css';


function App() {
    return (
        <div>
          <AppRouter/>
          <div className="card-container">
          </div>
        </div>
    );
}

export default App;
