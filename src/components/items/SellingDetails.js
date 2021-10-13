import React, { useState } from 'react';
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
                    <div className="selling-details">
                        <div className="selling-details__info">
                            <h5 className="selling-details__title"> Selling details </h5>
                            <h4 className="selling-details__required-warning"> All fields are required </h4>
                        </div>
                        <form 
                            action="#"
                            name="sellingDetailsForm"
                            id="selling_details_form"
                            onSubmit={ (e) => e.preventDefault() }
                        >
                            <div className="selling-details__input-box">
                                <label 
                                    htmlFor="selling_reason"
                                    className="selling-details__label"
                                > 
                                    Why are you selling?
                                </label>
                                <textarea 
                                    id="selling_reason" 
                                    className="selling-details__textarea"
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                            </div>
                            <div className="selling-details__input-box">
                                <label 
                                    htmlFor="financial_funding"
                                    className="selling-details__label"
                                > 
                                    Financial / funding
                                </label>
                                <input
                                    type="text"
                                    id="financial_funding" 
                                    className="selling-details__input"
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                            </div>
                            <div className="selling-details__actions">
                                <button
                                    type="submit"
                                    className="actions__save-btn"
                                >
                                    Save
                                </button>
                                <button
                                    type="reset"
                                    className="actions__cancel-btn"
                                    onClick={ () => setSellingDetailsFormIsOpen(false) }
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
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
