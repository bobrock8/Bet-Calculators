import React from 'react';

function CheckboxInput ( props ) {
    return (
        <input
            type="checkbox"
            name={props.name}
            className={props.class}
        />
    );
}

export default CheckboxInput;