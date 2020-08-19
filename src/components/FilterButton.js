import React from 'react';
import './FilterButton.css'

export default function FilterButton(props){
    console.log(props.name)
    console.log(props.isPressed)
    return(
        <div className="filters-btn-wrap">
            <button
                type="button"
                aria-pressed={props.isPressed}
                className={props.isPressed ? 'toggle-btn-focus' : 'toggle-btn' }
                onClick={() => props.setFilter(props.name)}
            >
                <span className="span-dot"></span>
                <span>{props.name}</span>
                
            </button>
        </div>

    );
}