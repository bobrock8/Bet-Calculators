import React from 'react';

function ToggleSwitchButton ( props ) {
    const classes = `toggle-switch-btn ${props.class}`;
    const roundClass = props.round ? 'toggle-switch-slider round' : 'slider';
    return (
        <React.Fragment>
            <label className={classes} id={props.id}>
            <input type="checkbox" />
            <span className={roundClass}></span>
            </label>
        </React.Fragment>
    );
}
export default ToggleSwitchButton;