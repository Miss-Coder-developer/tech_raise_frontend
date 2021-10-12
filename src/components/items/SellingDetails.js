import React from 'react';
import './SellingDetails.css';


const SellingDetails = () => {
    return (
        <React.Fragment>
            <h4 className="public-info__suggestion"> Selling details </h4>
            <p className="public-info__description"> Reasons and details of selling </p>
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

export default SellingDetails;
