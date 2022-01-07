import React from 'react';


function KeyAssetsItem({ keyAsset, handleChange, checked }) {
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
                    { keyAsset.name } 
                </span>
            </label>
        </li>
    );
}

export default KeyAssetsItem;