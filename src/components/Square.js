import React from 'react';

const Square = ({ value, onClick }) => (

    <button
        className="square"
        onClick={onClick}
        style={{
            color: value === 'X'? 'red': 'blue'
        }}
    >
        {value}
    </button>

);

export default Square;