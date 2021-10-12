import React from 'react';
import './SellingFinancialDetails.css';


const SellingFinancialDetails = () => {
    return (
        <React.Fragment>
            <h4 className="public-info__suggestion"> Selling Financial details </h4>
            <p className="public-info__description"> Additional income information </p>
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

export default SellingFinancialDetails;
