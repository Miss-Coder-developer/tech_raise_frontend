import React from 'react';
import './PublicInfoCard.css';


const PublicInfoCard = ({ children }) => {
    return (
        <div className="public-info__item-box">
            <div className="public-info__content">
                { children }
            </div>
        </div>
    );
};

export default PublicInfoCard;
