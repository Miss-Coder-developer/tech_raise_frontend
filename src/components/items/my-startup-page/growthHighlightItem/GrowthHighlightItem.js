import React from 'react';
import './GrowthHighlightItem.scss';


function GrowthHighlightItem({ growthHighlight, handleChange }) {
    return (
        <li>
            <label className="list__label">
                <input 
                    type="checkbox"
                    className="list__input"
                    onChange={ handleChange }
                />
                <div className="list__div" />
                <span className="list__span"> 
                    { growthHighlight.title } 
                </span>
            </label>
        </li>
    );
}

export default GrowthHighlightItem;
