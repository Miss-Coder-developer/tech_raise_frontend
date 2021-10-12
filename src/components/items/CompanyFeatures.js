import React from 'react';
import './CompanyFeatures.css';


const CompanyFeatures = () => {
    return (
        <React.Fragment>
            <h4 className="public-info__suggestion"> Company features </h4>
            <p className="public-info__description"> Highlights about your startup </p>
            <button
                type="button"
                className="public-info__add-info-butn"
                // onClick={  }
            >
                + Add information
            </button>
        </React.Fragment>
    );
};

export default CompanyFeatures;
