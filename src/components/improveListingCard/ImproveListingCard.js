import React from 'react';
import './ImproveListingCard.scss';


const ImproveListingCard = ({ infoTitle, infoText, children, isLoading }) => {
    return (
        <div className="listing__card">
            <div className="listing__info-box">
                <h6 className="listing__info"> { infoTitle } </h6>
                <p className="listing__text"> { infoText } </p>
                {
                    isLoading && (
                        <div className="listing__completion-area"> 
                            <p className="listing__completion-line" /> 
                        </div>
                    )
                }
            </div>
            { children }
        </div>
    );
};

export default ImproveListingCard;
