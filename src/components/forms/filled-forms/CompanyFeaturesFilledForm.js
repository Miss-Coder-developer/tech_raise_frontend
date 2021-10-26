import React from 'react';
import './CompanyFeaturesFilledForm.css';

export default function CompanyFeaturesFilledForm({ onEdit }) {
    return (
        <div className="info-container">
            <button
                type="button"
                className="private-info__edit-info-butn"
                onClick={ onEdit }
            >
                Edit info
            </button>
        </div>
    )
}
