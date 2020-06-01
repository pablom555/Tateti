import React from 'react';

const Square = ({ value, onClick }) => (

    <button
        className="square"
        onClick={onClick}
        style={{
            color: value === 'X'? '#00bbf9': '#fee440'
        }}
    >
        {value}
    </button>

);

export default Square;