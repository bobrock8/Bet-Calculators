import React from 'react';

function Button ( props ) {

    const btnType = props.type ? props.type : 'button';

    return (
        <button
        id={props.id}
        className={props.class} 
        type={btnType} 
        disabled={props.disabled} 
        value={props.value}
        name={props.name}>

                {props.text}

        </button>
    );
}
export default Button;