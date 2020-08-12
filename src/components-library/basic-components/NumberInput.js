import React from 'react';

function NumberInput ( props ) {
    return (
            <input 
                type="number"
                name={props.name} 
                className={props.class}
                placeholder={props.placeholder}
                min={props.min}
                max={props.max}
            />
         )
    ;
}

export default NumberInput;