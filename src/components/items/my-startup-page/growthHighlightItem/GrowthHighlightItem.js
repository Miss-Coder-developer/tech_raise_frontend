import React from 'react';
import './GrowthHighlightItem.scss';


function GrowthHighlightItem({ growthHighlight, handleChange, checked }) {
    return (
        <li>

            <label className="list__label">
                <input 
                    type="checkbox"
                    className="list__input"
                    onChange={ handleChange }
                    checked={checked}
                />
                <div className="list__div" />
                <span className="list__span"> 
                    { growthHighlight.name } 
                </span>
            </label>
        </li>
    );
}

export default GrowthHighlightItem;
