import React from 'react';

function SelectInput ( props ) {
    return (
        <select 
         name={props.name}
         id={props.id} 
         className={props.class} 
         autoFocus={props.autoFocus} 
         disabled={props.disabled} 
         required={props.required} 
         multiple={props.multiple} 
         size={props.size}>

            <option>{props.defaultValue}</option>
            {props.children}
            
        </select>
    );
}

export default SelectInput;