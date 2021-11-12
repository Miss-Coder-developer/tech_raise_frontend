import React, { useState, useContext } from 'react';
import './FinancialDetailsNewForm.scss';
import MyStartupDropdown from '../../../UI/dropdowns/MyStartupDropdown';
import { useValidity } from '../../../../custom-hooks/form-validity';
import { PassingInfoContext } from '../../../contexts/passing-info-context';


function FinancialDetailsNewForm({ onClose, onFinish }) {
    const [selectedAnswer, setSelectedAnswer] = useState("NO");

    const myStartupInfoCtx = useContext(PassingInfoContext);

    const passSelectedAnswer = (selected) => setSelectedAnswer(selected);

    const invalid_input_msg = "Value should be not empty";

    const isNotEmpty = value => value.trim() !== "";

    const {
        enteredValue: enteredTotalRevenue,
        inputIsValid: totalRevenueInputIsValid,
        inputIsInvalid: totalRevenueInputIsInvalid,
        changeInputValueHandler: changeTotalRevenueInputValueHandler,
        blurInputHandler: blurTotalRevenueInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredTotalProfit,
        inputIsValid: totalProfitInputIsValid,
        inputIsInvalid: totalProfitInputIsInvalid,
        changeInputValueHandler: changeTotalProfitInputValueHandler,
        blurInputHandler: blurTotalProfitInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredAnnualRevenue,
        inputIsValid: annualRevenueInputIsValid,
        inputIsInvalid: annualRevenueInputIsInvalid,
        changeInputValueHandler: changeAnnualRevenueInputValueHandler,
        blurInputHandler: blurAnnualRevenueInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredAnnualProfit,
        inputIsValid: annualProfitInputIsValid,
        inputIsInvalid: annualProfitInputIsInvalid,
        changeInputValueHandler: changeAnnualProfitInputValueHandler,
        blurInputHandler: blurAnnualProfitInputHandler
    } = useValidity(isNotEmpty);

    const financialDetailsFormIsValid = totalRevenueInputIsValid && totalProfitInputIsValid && annualRevenueInputIsValid && annualProfitInputIsValid;

    const submitFinancialDetailsData = (evt) => {
        evt.preventDefault();
        if(!financialDetailsFormIsValid) return;
        const financialDetailsData = {
            id: Math.random().toString(),
            financial_sum: selectedAnswer,
            total_revenue: enteredTotalRevenue,
            total_profit: enteredTotalProfit,
            annual_revenue: enteredAnnualRevenue,
            annual_profit: enteredAnnualProfit
        };
        console.log(financialDetailsData);
        myStartupInfoCtx.passFinancialDetailsData(financialDetailsData);
        onFinish();
    };

    return (
        <div className="selling-financial-details">
            <div className="selling-financial-details__info">
                <h5 className="selling-financial-details__title"> Selling Financial details </h5>
                <h4 className="selling-financial-details__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="sellingDetailsForm" id="selling_details_form" onSubmit={ submitFinancialDetailsData }>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="financial_summary"
                        className="selling-financial-details__label"
                    > 
                        { "Do you have a financial summary or P&L?" }
                    </label>
                    <MyStartupDropdown 
                        dropdownOptions={ ["NO", "YES"] }
                        dropdownClassName={ "financial-summary__dropdown" }
                        onPass={ passSelectedAnswer }
                        selected={ selectedAnswer }
                    />
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="total_revenue"
                        className="selling-financial-details__label"
                    > 
                        What was total revenue last month?
                    </label>
                    <input
                        type="number"
                        id="total_revenue" 
                        className={ `selling-financial-details__input ${ totalRevenueInputIsInvalid && "invalid" }` }
                        value={ enteredTotalRevenue }
                        onChange={ changeTotalRevenueInputValueHandler }
                        onBlur={ blurTotalRevenueInputHandler }
                        autoComplete="off"
                    />
                    { totalRevenueInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="total_profit"
                        className="selling-financial-details__label"
                    > 
                        What was total profit last month?
                    </label>
                    <input
                        type="number"
                        id="total_profit" 
                        className={ `selling-financial-details__input ${ totalProfitInputIsInvalid && "invalid" }` }
                        value={ enteredTotalProfit }
                        onChange={ changeTotalProfitInputValueHandler }
                        onBlur={ blurTotalProfitInputHandler }
                        autoComplete="off"
                    />
                    { totalProfitInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="revenue_over_the_past_12_months"
                        className="selling-financial-details__label"
                    > 
                        What was total revenue over the past 12 months?
                    </label>
                    <input
                        type="number"
                        id="revenue_over_the_past_12_months" 
                        className={ `selling-financial-details__input ${ annualRevenueInputIsInvalid && "invalid" }` }
                        value={ enteredAnnualRevenue }
                        onChange={ changeAnnualRevenueInputValueHandler }
                        onBlur={ blurAnnualRevenueInputHandler }
                        autoComplete="off"
                    />
                    { annualRevenueInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="profit_over_the_past_12_months"
                        className="selling-financial-details__label"
                    > 
                        What was the total profit over the past 12 months?
                    </label>
                    <input
                        type="text"
                        id="profit_over_the_past_12_months" 
                        className={ `selling-financial-details__input ${ annualProfitInputIsInvalid && "invalid" }` }
                        value={ enteredAnnualProfit }
                        onChange={ changeAnnualProfitInputValueHandler }
                        onBlur={ blurAnnualProfitInputHandler }
                        autoComplete="off"
                    />
                    { annualProfitInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                </div>
                <div className="selling-financial-details__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                        disabled={ !financialDetailsFormIsValid }
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

export default FinancialDetailsNewForm;
