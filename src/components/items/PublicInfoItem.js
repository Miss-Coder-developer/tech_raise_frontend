import React from 'react';
import './PublicInfoItem.css';


const PublicInfoItem = ({ infoItem }) => {
    return (
        <div className="public-info__item-box">
            <h4 className="public-info__suggestion"> { infoItem.suggestion } </h4>
            <p className="public-info__description"> { infoItem.description } </p>
            <button
                type="button"
                className="public-info__add-info-butn"
                // onClick={}
            >
                + Add information
            </button>
        </div>
    );
};

export default PublicInfoItem;
