import React from "react";

function Label ( props ) {
    return (
        <label className={props.class} htmlFor={props.forInput}>{props.text}</label>
    );
}

export default Label;