import React, { useState } from 'react';
import SellingFinancialDetailsNewForm from '../../forms/new-forms/SellingFinancialDetailsNewForm';
import './SellingFinancialDetails.css';


const SellingFinancialDetails = () => {
    const [sellingFinancialDetailsFormIsOpen, setSellingFinancialDetailsFormIsOpen] = useState(false);

    const boxClassName = (sellingFinancialDetailsFormIsOpen) ? "public-info" : "public-info__item-box";

    return (
        <div className={ boxClassName }>
            {
                (sellingFinancialDetailsFormIsOpen)
                ? (
                    <SellingFinancialDetailsNewForm onClose={ () => setSellingFinancialDetailsFormIsOpen(false) } />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Selling Financial details </h4>
                        <p className="public-info__description"> Additional income information </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setSellingFinancialDetailsFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                )
            }
            
        </div>
    );
};

export default SellingFinancialDetails;
