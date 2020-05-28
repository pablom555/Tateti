import React from 'react';
import Board from './../components/Board';

const Game = ({ squares, onClick, status, moves }) => (

    <div className="game">
        <div className="game-board">

            <div className="status">{status}</div>

            <Board
                squares={squares}
                onClick={onClick}
            />

        </div>
        
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
);

export default Game;