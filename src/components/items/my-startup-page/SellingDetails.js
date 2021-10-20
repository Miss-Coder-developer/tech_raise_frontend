import React, { useState } from 'react';
import SellingDetailsNewForm from '../../forms/new-forms/SellingDetailsNewForm';
import './SellingDetails.css';


const SellingDetails = () => {
    const [sellingDetailsFormIsOpen, setSellingDetailsFormIsOpen] = useState(false);

    const box_class_name = (sellingDetailsFormIsOpen) ? "public-info" : "public-info__item-box";
    const invalid_input_msg = "Value should be not empty";

    return (
        <div className={ box_class_name }>
            {
                (sellingDetailsFormIsOpen)
                ? (
                    <SellingDetailsNewForm onClose={ () => setSellingDetailsFormIsOpen(false) } />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Selling details </h4>
                        <p className="public-info__description"> Reasons and details of selling </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setSellingDetailsFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default SellingDetails;
