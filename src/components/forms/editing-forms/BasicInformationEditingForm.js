import React, { useState } from 'react';
import MyStartupDropdown from '../../UI/dropdowns/MyStartupDropdown';


const ASKING_PRICE_RESPONSE = ["I know the price", "I can’t determine the price, but i’m open to offers"];

function BasicInformationEditingForm({ onClose }) {
    const [basicInfoData, setBasicInfoData] = useState({
        id: Math.random().toString(),
        startupType: "", 
        aboutCompany: "",
        annualRevenue: "",
        numOfCustomers: "",
        month: "",
        year: "",
        priceResponse: "",
        teamSize: "",
    });

    const [selectedStartupType, setSelectedStartupType] = useState("Artificial Intelligence"); 
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState("2021");

    const passSelectedStartupType = (selected) => {
        setBasicInfoData({
            ...basicInfoData,
            startupType: selected
        });
        setSelectedStartupType(selected);
        console.log(selected);
    };

    const passSelectedMonth = (selected) => {
        setBasicInfoData({
            ...basicInfoData,
            month: selected
        });
        setSelectedMonth(selected);
        console.log(selected);
    };

    const passSelectedYear = (selected) => {
        setBasicInfoData({
            ...basicInfoData,
            year: selected
        });
        setSelectedYear(selected);
        console.log(selected);
    };


    const submitBasicInfo = (evt) => {
        evt.preventDefault();
        console.log(basicInfoData, "basicInfoData!!!!!");
    };

    return (
        <div className="selling-financial-details">
            <div className="selling-financial-details__info">
                <h5 className="selling-financial-details__title"> 
                    Basic information about startup numbers and history 
                </h5>
                <h4 className="selling-financial-details__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="sellingDetailsForm" id="selling_details_form" onSubmit={ submitBasicInfo }>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Startup type </label>
                    <MyStartupDropdown 
                        dropdownOptions={ [
                            "Artificial Intelligence", "Blockchain", "Cloud Computing", "Communication", "Consumer", "Cybersecurity", "EdTech", "FinTech", "HealthTech", "RegTech", "SaaS", "Other"
                        ] }
                        dropdownClassName={ "startup-type__dropdown" }
                        onPass={ passSelectedStartupType }
                        selected={ selectedStartupType }
                    />
                </div>
                <div className="selling-details__input-box">
                    <label 
                        htmlFor="about-company"
                        className="selling-details__label"
                    > 
                        About company
                    </label>
                    <textarea 
                        id="about-company" 
                        className="selling-details__textarea"
                        defaultValue="Profitable SaaS with $125,000 in ARR and TTM revenue that has the ability to coach clients. This sales and marketing platform are built for coaches and consultants where they can send marketing emails and run advanced automation through the workflow builder. "
                        onChange={ (evt) => setBasicInfoData({ ...basicInfoData, aboutCompany: evt.target.value }) }
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
                        onChange={ (evt) => setBasicInfoData({ ...basicInfoData, annualRevenue: evt.target.value }) }
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
                        onChange={ (evt) => setBasicInfoData({ ...basicInfoData, numOfCustomers: evt.target.value }) }
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Date founded </label>
                    <div className="basic-info__dropdown-box">
                        <MyStartupDropdown 
                            dropdownOptions={ ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }
                            dropdownClassName={ "months__dropdown" }
                            onPass={ passSelectedMonth }
                            selected={ selectedMonth }
                        />
                        <MyStartupDropdown 
                            dropdownOptions={ [
                                "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"
                            ] }
                            dropdownClassName={ "years__dropdown" }
                            onPass={ passSelectedYear }
                            selected={ selectedYear }
                        />
                    </div>
                </div>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Asking price </label>
                    <div className="basic-info__checkbox">
                        {
                            ASKING_PRICE_RESPONSE.map((response, index) => {
                                return (
                                    <label className="asking-price__label" key={ index }>
                                        <input 
                                            type="radio" 
                                            className="asking-price__input"
                                            name="askingPrice"
                                            onChange={ () => setBasicInfoData({ ...basicInfoData, priceResponse: response }) }
                                        />
                                        { response }
                                    </label>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="selling-financial-details__input-box">
                    <label 
                        htmlFor="startup-team-size"
                        className="selling-financial-details__label"
                    > 
                        Startup team size
                    </label>
                    <input
                        type="number"
                        id="startup-team-size" 
                        className="selling-financial-details__input"
                        defaultValue="6" // temporary
                        onChange={ (evt) => setBasicInfoData({ ...basicInfoData, teamSize: evt.target.value }) }
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
                        onClick={ onClose }
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BasicInformationEditingForm;