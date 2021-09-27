import React from 'react';
import './ImproveListingCard.css';


const ImproveListingCard = ({ infoTitle, infoText, children, isLoading }) => {
    return (
        <div className="improve-listing__card">
            <div className="improve-listing__box">
                <div className="improve-listing__info-box">
                    <h6 className="improve-listing__info"> { infoTitle } </h6>
                    <p className="improve-listing__text"> { infoText } </p>
                    {
                        isLoading && (
                            <div className="improve-listing__completion-area"> 
                                <p className="improve-listing__completion-line" /> 
                            </div>
                        )
                    }
                </div>
                { children }
            </div>
        </div>
    );
};

export default ImproveListingCard;
