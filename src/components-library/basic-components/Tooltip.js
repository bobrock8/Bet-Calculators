import React from "react";

function Tooltip ( props ) {
    return (
            <span className={"tooltip " + props.customClass} >
                {props.children}
                <span className="tooltip-text" >{props.tooltipText}</span>
            </span>
    );
}

export default Tooltip;