import './App.css';
import React from 'react';
import Grid from './components/grid';
import Game from './components/game';

function App() {
  return (
    <div className="App">
    <h1>Noughts and Crosses</h1>
    <Game></Game>
    </div>
  );
}

export default App;
