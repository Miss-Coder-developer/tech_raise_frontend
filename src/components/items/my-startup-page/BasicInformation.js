import React from 'react';
import MyStartupDropdown from '../../UI/dropdowns/MyStartupDropdown';
import './BasicInformation.css';


const BasicInformation = ({ onFinishEditing }) => {
    return (
        <div className="selling-financial-details">
            <div className="selling-financial-details__info">
                <h5 className="selling-financial-details__title"> 
                    Basic information about startup numbers and history 
                </h5>
                <h4 className="selling-financial-details__required-warning"> All fields are required </h4>
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
                        Startup type
                    </label>
                    <MyStartupDropdown 
                        dropdownOptions={ [
                            "Artificial Intelligence", "Blockchain", "Cloud Computing", "Communication", "Consumer", "Cybersecurity", "EdTech", "FinTech", "HealthTech", "RegTech", "SaaS", "Other"
                        ] }
                        dropdownClassName={ "startup-type__dropdown" }
                    />
                </div>
                <div className="selling-details__input-box">
                    <label 
                        htmlFor="selling_reason"
                        className="selling-details__label"
                    > 
                        About company
                    </label>
                    <textarea 
                        id="selling_reason" 
                        className="selling-details__textarea"
                        defaultValue="Profitable SaaS with $125,000 in ARR and TTM revenue that has the ability to coach clients. This sales and marketing platform are built for coaches and consultants where they can send marketing emails and run advanced automation through the workflow builder. "
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="total_revenue"
                        className="selling-financial-details__label"
                    > 
                        Annual recurring revenue
                    </label>
                    <input
                        type="text"
                        id="total_revenue" 
                        className="selling-financial-details__input"
                        defaultValue="125,000" // temporary
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="total_profit"
                        className="selling-financial-details__label"
                    > 
                        Number of customers
                    </label>
                    <input
                        type="text"
                        id="total_profit" 
                        className="selling-financial-details__input"
                        defaultValue="100-1,000" // temporary
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="total_profit"
                        className="selling-financial-details__label"
                    > 
                        Startup team size
                    </label>
                    <input
                        type="number"
                        id="total_profit" 
                        className="selling-financial-details__input"
                        defaultValue="6" // temporary
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
                        onClick={ onFinishEditing }
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BasicInformation;
