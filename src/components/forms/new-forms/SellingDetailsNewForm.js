import React, { useState } from 'react';
import './SellingDetailsNewForm.css';


function SellingDetailsNewForm({ onClose }) {
    const [sellingDetailsData, setSellingDetailsData] = useState({
        id: Math.random().toString(),
        sellingPurpose: "",
        funding: "",
    });

    const invalid_input_msg = "Value should be not empty";

    const submitSellingDetailsData = (evt) => {
        evt.preventDefault();
        console.log(sellingDetailsData);
    };

    return (
        <div className="selling-details">
            <div className="selling-details__info">
                <h5 className="selling-details__title"> Selling details </h5>
                <h4 className="selling-details__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="sellingDetailsForm" id="selling_details_form" onSubmit={ submitSellingDetailsData }>
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
                        onChange={ (evt) => setSellingDetailsData({ ...sellingDetailsData, sellingPurpose: evt.target.value }) }
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
                        onChange={ (evt) => setSellingDetailsData({ ...sellingDetailsData, funding: evt.target.value }) }
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
                        onClick={ onClose }
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SellingDetailsNewForm;
