import React from 'react';
import './App.css';
import Board from './components/Board.js';
import Square from './components/Square.js';

function App() {
  return (
    <div className="App">
     <Board />
     <Square />
    </div>
  );
}

export default App;
