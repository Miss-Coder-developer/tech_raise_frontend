import axios from 'axios';
import React, {useContext, useState} from 'react';
import {useValidity} from '../../../../custom-hooks/form-validity';
import MyStartupDropdown from '../../../UI/dropdowns/MyStartupDropdown';
import {PassingInfoContext} from '../../../contexts/passing-info-context';

import './SellingDetailsNewForm.scss';


function SellingDetailsNewForm({onClose, onFinish, startup_id}) {
    const myStartupInfoCtx = useContext(PassingInfoContext);

    const [selectedAnswer, setSelectedAnswer] = useState("NO");
    const [detailsData, setDetailsData] = useState(); 

    const invalid_input_msg = "Value should be not empty";

    const isNotEmpty = value => value.trim() !== "";

    const passSelectedAnswer = (selected) => setSelectedAnswer(selected);

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

    const sellingDetailsFormIsValid = sellingPurposeInputIsValid && fundingInputIsValid && totalRevenueInputIsValid && totalProfitInputIsValid && annualRevenueInputIsValid && annualProfitInputIsValid;


    const saveSellingDetails = async (e) => {
        e.preventDefault()
        console.log(startup_id)
        if (detailsData?.id) {
            let id = detailsData.id;

            axios.put(`${process.env.REACT_APP_API_URL}/startup/selling-details/update`, {
                startup_id,
                'selling_why': enteredSellingPurpose,
                'funding': enteredFunding,
                'financial_summary': selectedAnswer === 'NO' ? 0 : 1,
                'last_month_total_revenue': enteredTotalRevenue,
                'last_month_total_profit': enteredTotalProfit,
                'last_year_total_revenue': enteredAnnualRevenue,
                'last_year_total_profit': enteredAnnualProfit
            }).then(res => {
                const sellingDetailsData = {
                    //id: startupData?.startup_id,
                    selling_purpose: res.data.selling_why,
                    funding: res.data.funding,
                    financial_sum: res.data.financial_summary,
                    total_revenue: res.data.last_month_total_revenue,
                    total_profit: res.data.last_month_total_profit,
                    annual_revenue: res.data.last_year_total_revenue,
                    annual_profit: res.data.last_year_total_profit
                };
                myStartupInfoCtx.passSellingDetailsData(sellingDetailsData);
                setDetailsData(res.data);
                onFinish();
            })
        } else {
            axios.put(`${process.env.REACT_APP_API_URL}/startup/selling-details/update`, {
                startup_id,
                'selling_why': enteredSellingPurpose,
                'funding': enteredFunding,
                'financial_summary': selectedAnswer === 'NO' ? 0 : 1,
                'last_month_total_revenue': enteredTotalRevenue,
                'last_month_total_profit': enteredTotalProfit,
                'last_year_total_revenue': enteredAnnualRevenue,
                'last_year_total_profit': enteredAnnualProfit
            }).then(res => {
                const sellingDetailsData = {
                    //id: startupData?.startup_id,
                    selling_purpose: res.data.selling_why,
                    funding: res.data.funding,
                    financial_sum: res.data.financial_summary,
                    total_revenue: res.data.last_month_total_revenue,
                    total_profit: res.data.last_month_total_profit,
                    annual_revenue: res.data.last_year_total_revenue,
                    annual_profit: res.data.last_year_total_profit
                };
                myStartupInfoCtx.passSellingDetailsData(sellingDetailsData);
                setDetailsData(res.data);
                onFinish();
            })
        }
    }

    return (
        <div className="selling-details">
            <div className="selling-details__info">
                <h5 className="selling-details__title"> Financial details </h5>
                <h4 className="selling-details__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="sellingDetailsForm" id="selling_details_form">
                <div className="selling-details__input-box">
                    <label
                        htmlFor="selling_reason"
                        className="selling-details__label"
                    >
                        Why are you selling?
                    </label>
                    <textarea
                        id="selling_reason"
                        className={`selling-details__textarea ${sellingPurposeInputIsInvalid && "invalid"}`}
                        value={enteredSellingPurpose}
                        onChange={changeSellingPurposeInputValueHandler}
                        onBlur={blurSellingPurposeInputHandler}
                    />
                    {sellingPurposeInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-details__input ${fundingInputIsInvalid && "invalid"}`}
                        value={enteredFunding}
                        onChange={changeFundingInputValueHandler}
                        onBlur={blurFundingInputHandler}
                    />
                    {fundingInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
                </div>
                <div className="selling-financial-details__input-box">
                    <label
                        htmlFor="financial_summary"
                        className="selling-financial-details__label"
                    >
                        {"Do you have a financial summary or P&L?"}
                    </label>
                    <MyStartupDropdown
                        dropdownOptions={["NO", "YES"]}
                        dropdownClassName={"financial-summary__dropdown"}
                        onPass={passSelectedAnswer}
                        selected={selectedAnswer}
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
                        className={`selling-financial-details__input ${totalRevenueInputIsInvalid && "invalid"}`}
                        value={enteredTotalRevenue}
                        onChange={changeTotalRevenueInputValueHandler}
                        onBlur={blurTotalRevenueInputHandler}
                        autoComplete="off"
                    />
                    {totalRevenueInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-financial-details__input ${totalProfitInputIsInvalid && "invalid"}`}
                        value={enteredTotalProfit}
                        onChange={changeTotalProfitInputValueHandler}
                        onBlur={blurTotalProfitInputHandler}
                        autoComplete="off"
                    />
                    {totalProfitInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-financial-details__input ${annualRevenueInputIsInvalid && "invalid"}`}
                        value={enteredAnnualRevenue}
                        onChange={changeAnnualRevenueInputValueHandler}
                        onBlur={blurAnnualRevenueInputHandler}
                        autoComplete="off"
                    />
                    {annualRevenueInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-financial-details__input ${annualProfitInputIsInvalid && "invalid"}`}
                        value={enteredAnnualProfit}
                        onChange={changeAnnualProfitInputValueHandler}
                        onBlur={blurAnnualProfitInputHandler}
                        autoComplete="off"
                    />
                    {annualProfitInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
                </div>
                <div className="selling-details__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                        disabled={!sellingDetailsFormIsValid}
                        onClick={saveSellingDetails}
                    >
                        Save
                    </button>
                    <button
                        type="reset"
                        className="actions__cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SellingDetailsNewForm;
