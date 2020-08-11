import React from "react";

function Tooltip ( props ) {
    let customClass = props.customClass ? props.customClass : "";

    return (
            <span className={"tooltip " + customClass} >
                {props.children}
                <span className="tooltip-text" >{props.tooltipText}</span>
            </span>
    );
}

export default Tooltip;