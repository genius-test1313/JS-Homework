import React from 'react';
import Square from './Square';
import './App.css';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <Square
          key={i}
          value={squares[i]}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

export default Board;
