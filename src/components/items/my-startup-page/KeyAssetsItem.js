import React from 'react';


function KeyAssetsItem({ keyAsset }) {
    return (
        <li>
            <label className="list__label">
                <input 
                    type="checkbox"
                    className="list__input"
                />
                <div className="list__div" />
                <span className="list__span"> 
                    { keyAsset.title } 
                </span>
            </label>
        </li>
    );
}

export default KeyAssetsItem;