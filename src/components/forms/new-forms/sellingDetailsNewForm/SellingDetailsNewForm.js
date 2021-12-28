import axios from 'axios';
import React, { useContext } from 'react';
import { useValidity } from '../../../../custom-hooks/form-validity';
import { PassingInfoContext } from '../../../contexts/passing-info-context';
import '../';
import './SellingDetailsNewForm.scss';


function SellingDetailsNewForm({ onClose, onFinish }) {
    const myStartupInfoCtx = useContext(PassingInfoContext);

    const invalid_input_msg = "Value should be not empty";

    const isNotEmpty = value => value.trim() !== "";

    const {
        enteredValue: enteredSellingPurpose,
        inputIsValid: sellingPurposeInputIsValid,
        inputIsInvalid: sellingPurposeInputIsInvalid,
        changeInputValueHandler: changeSellingPurposeInputValueHandler,
        blurInputHandler: blurSellingPurposeInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredFunding,
        inputIsValid: fundingInputIsValid,
        inputIsInvalid: fundingInputIsInvalid,
        changeInputValueHandler: changeFundingInputValueHandler,
        blurInputHandler: blurFundingInputHandler
    } = useValidity(isNotEmpty);

    const sellingDetailsFormIsValid = sellingPurposeInputIsValid && fundingInputIsValid;

    const submitSellingDetailsData = (evt) => {
        evt.preventDefault();
        if(!sellingDetailsFormIsValid) return;
        const sellingDetailsData = {
            id: Math.random().toString(),
            selling_purpose: enteredSellingPurpose,
            funding: enteredFunding,
        };
        console.log(sellingDetailsData);
        myStartupInfoCtx.passSellingDetailsData(sellingDetailsData);
        onFinish();
    };

    const saveSellingDetails = () => {
        axios.put(`${process.env.REACT_APP_API_URL}/startup/update-public-info`, {
            'selling_reason': enteredSellingPurpose,
            'financial_funding': enteredFunding
        })
    } 

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
                        className={ `selling-details__textarea ${ sellingPurposeInputIsInvalid && "invalid" }` }
                        value={ enteredSellingPurpose }
                        onChange={ changeSellingPurposeInputValueHandler }
                        onBlur={ blurSellingPurposeInputHandler }
                    />
                    { sellingPurposeInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
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
                        className={ `selling-details__input ${ fundingInputIsInvalid && "invalid" }` }
                        value={ enteredFunding }
                        onChange={ changeFundingInputValueHandler }
                        onBlur={ blurFundingInputHandler }
                    />
                    { fundingInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                </div>
                
                <div className="selling-details__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                        disabled={ !sellingDetailsFormIsValid }
                        onClick={saveSellingDetails}
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
