import React, { useState } from 'react';
import Game from './../components/Game';

const GameContainer = () => {

    /***********************************/
    /*            Estados              */
    /***********************************/
    // Estado history es un array en donde se van agragando
    // objetos squares cuyo contenido es un array de longitud 9
    // donde se guardan los valores de cada squere.
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);

    // Se va guardando el numero de movimiento
    const [stepNumber, setStepNumber] = useState(0);

    // Para controlar si es el tueno de X ó O.
    const [xIsNext, setXIsNext] = useState(true);


    /***********************************/
    /*           Funciones             */
    /***********************************/
    const handleClick = i => {

        const hist = history.slice(0, stepNumber + 1);
        const current = hist[hist.length - 1];
        const squares = current.squares.slice();

        // Si ya hubo Ganador o ya tiene valor el square no hace nada
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // Llena el cuadrado con X ó O segun corresponda
        squares[i] = xIsNext ? 'X' : 'O';

        setHistory(hist.concat([{
            squares: squares,
        }]));

        setStepNumber(hist.length);
        setXIsNext(!xIsNext);
    }

    const jumpTo = step => {

        // Si vuelve al paso 0 inicializa el juego
        if (step === 0)
            setHistory([{
                squares: Array(9).fill(null),
            }]);

        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    // Funcion para determinar si ya hubo un ganador
    const calculateWinner = squares => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let line of lines) {

            const [a, b, c] = line;

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;

    }

    /***********************************/
    /*      Logica del componente      */
    /***********************************/
    const hist = history;
    const current = hist[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
        status = `Ha ganado: ${winner}`;
    } else {
        status = `EL turno es de: ${(xIsNext ? 'X' : 'O')}`;
    }

    // recorre los movimientos y por cada uno renderiza un Boton
    const moves = hist.map((step, move) => {

        const desc = move ? `Ir al Movimiento # ${move}` : 'Inicializar Ta-Te-Ti';

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (

        <Game
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            status={status}
            moves={moves}
        />

    );

};

export default GameContainer;