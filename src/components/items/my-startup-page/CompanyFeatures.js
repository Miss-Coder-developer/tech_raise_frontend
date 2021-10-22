import React, { useState } from 'react';
import CompanyFeaturesNewForm from '../../forms/new-forms/CompanyFeaturesNewForm';
import './CompanyFeatures.css';


const CompanyFeatures = () => {
    const [companyFeaturesFormIsOpen, setCompanyFeaturesFormIsOpen] = useState(false);
    
    const box_class_name = (companyFeaturesFormIsOpen) ? "public-info" : "public-info__item-box";

    return (
        <div className={ box_class_name }> 
            {
                (companyFeaturesFormIsOpen) 
                ? (
                    <CompanyFeaturesNewForm onClose={ () => setCompanyFeaturesFormIsOpen(false) } />
                ) 
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Company features </h4>
                        <p className="public-info__description"> Highlights about your startup </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setCompanyFeaturesFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                ) 
            }
        </div>
    );
};

export default CompanyFeatures;
