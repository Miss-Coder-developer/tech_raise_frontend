import React, { useState } from 'react';
import { my_startup_icons } from '../../dummy_datas/Icons';
import './SellingFinancialDetails.css';


const SellingFinancialDetails = () => {
    const [sellingFinancialDetailsFormIsOpen, setSellingFinancialDetailsFormIsOpen] = useState(false);
    const [dropdownIsShown, setDropdownIsShown] = useState(false);
    const [selected, setSelected] = useState("no");
    const [options, setOptions] = useState(["yes"]);

    const box_class_name = (sellingFinancialDetailsFormIsOpen) ? "public-info" : "public-info__item-box";
    const show_dropdown_class_name = `
        selling-financial-details__show-dropdown ${ (dropdownIsShown) && "rotate-icon" }
    `;
    const invalid_input_msg = "Value should be not empty";


    return (
        <div className={ box_class_name }>
            {
                (sellingFinancialDetailsFormIsOpen)
                ? (
                    <div className="selling-financial-details">
                        <div className="selling-financial-details__info">
                            <h5 className="selling-financial-details__title"> Selling Financial details </h5>
                            <h4 className="selling-financial-details__required-warning"> All fields are required </h4>
                        </div>
                        <form 
                            action="#"
                            name="sellingDetailsForm"
                            id="selling_details_form"
                            onSubmit={ (e) => e.preventDefault() }
                        >
                            <div className="selling-financial-details__input-box">
                                <label 
                                    htmlFor="financial_summary"
                                    className="selling-financial-details__label"
                                > 
                                    { "Do you have a financial summary or P&L?" }
                                </label>
                                <div className="selling-financial-details__div">
                                    <div 
                                        className={ show_dropdown_class_name }
                                        onClick={ () => setDropdownIsShown((prevState) => !prevState) }
                                    >
                                        <p className="selling-financial-details__selected"> { selected } </p>
                                        <img src={ my_startup_icons.down_arrow_icon } alt="down arrow" />
                                    </div>
                                    {
                                        (dropdownIsShown) && (
                                            options.map((option, index) => {
                                                return (
                                                    <div 
                                                        key={ index }
                                                        className="selling-financial-details__dropdown"
                                                        onClick={ () => {
                                                            setSelected(option);
                                                            setDropdownIsShown(false);
                                                            setOptions([...options.filter(prevOption => {
                                                                return prevOption !== option;
                                                            }), selected]);
                                                        } }
                                                    >
                                                        <p className="selling-financial-details__option">
                                                            { option }
                                                        </p>
                                                    </div>
                                                );
                                            })
                                        )
                                    }
                                </div>
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
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
                                    className="selling-financial-details__input"
                                    value="50000" // temporary
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
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
                                    className="selling-financial-details__input"
                                    value="50000" // temporary
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
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
                                    className="selling-financial-details__input"
                                    value="50000" // temporary
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
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
                                    className="selling-financial-details__input"
                                    value="50000" // temporary
                                />
                                {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                            </div>
                            <div className="selling-financial-details__actions">
                                <button
                                    type="submit"
                                    className="actions__save-btn"
                                >
                                    Save
                                </button>
                                <button
                                    type="reset"
                                    className="actions__cancel-btn"
                                    onClick={ () => setSellingFinancialDetailsFormIsOpen(false) }
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
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
