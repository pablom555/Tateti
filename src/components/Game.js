import React from 'react';
import Board from './../components/Board';

const Game = ({ squares, onClick, status: {legend, gamer}, moves }) => {

    return (
    <div className="game">
        <div className="game-board">

            <div className="status">
                {legend}
                <span
                    style={{ color: gamer === 'X' ? '#00bbf9' : '#fee440' }}>
                    {gamer}
                </span>
            </div>

            <Board
                squares={squares}
                onClick={onClick}
            />

        </div>

        <div className="game-info">
            <ul>{moves}</ul>
        </div>
    </div>)
};

export default Game;