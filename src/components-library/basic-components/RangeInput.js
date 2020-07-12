import React from 'react';

function RangeInput ( props ) {
    return (
        <input
            type="range"
            min={props.min}
            max={props.max}
            value={props.value}
            className={props.class}
            name={props.name}
        />
        );
}

export default RangeInput;