import React, {useState, useContext, useEffect} from 'react';
import {useValidity} from '../../../../custom-hooks/form-validity';
import {PassingInfoContext} from '../../../contexts/passing-info-context';
import MyStartupDropdown from '../../../UI/dropdowns/MyStartupDropdown';
import axios from 'axios';
import moment from 'moment';
import './BasicInformationNewForm.scss';


const ASKING_PRICE_RESPONSE = ["I know the price", "I can’t determine the price, but i’m open to offers"];

function BasicInformationNewForm({onClose, onFinish, startup_id}) {


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/startup/basic-info/startup-types`)
            .then((res) => {
                console.log(res.data);
                setStartups(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const [startups, setStartups] = useState(null);
    const [selectedStartupType, setSelectedStartupType] = useState("");
    const [selectedStartupTypeId, setSelectedStartupTypeId] = useState();
    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState("2021");
    const [selectedPriceResponse, setSelectedPriceResponse] = useState("");
    const [knowingPrice, setKnowingPrice] = useState();
    const [startupData, setStartupData] = useState();

    console.log(startup_id);


    const myStartupInfoCtx = useContext(PassingInfoContext);


    const invalid_input_msg = "Value should be not empty";

    const isNotEmpty = value => value.trim() !== "";

    const {
        enteredValue: enteredAboutCompanyText,
        inputIsValid: aboutCompanyTextInputIsValid,
        inputIsInvalid: aboutCompanyTextInputIsInvalid,
        changeInputValueHandler: changeAboutCompanyTextInputValueHandler,
        blurInputHandler: blurAboutCompanyTextInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredAnnualRevenue,
        inputIsValid: annualRevenueInputIsValid,
        inputIsInvalid: annualRevenueInputIsInvalid,
        changeInputValueHandler: changeAnnualRevenueInputValueHandler,
        blurInputHandler: blurAnnualRevenueInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredNumOfCustomers,
        inputIsValid: numOfCustomersInputIsValid,
        inputIsInvalid: numOfCustomersInputIsInvalid,
        changeInputValueHandler: changeNumOfCustomersInputValueHandler,
        blurInputHandler: blurNumOfCustomersInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredStartupTeamSize,
        inputIsValid: startupTeamSizeInputIsValid,
        inputIsInvalid: startupTeamSizeInputIsInvalid,
        changeInputValueHandler: changeStartupTeamSizeInputValueHandler,
        blurInputHandler: blurStartupTeamSizeInputHandler
    } = useValidity(isNotEmpty);

    const passSelectedStartupType = (selected) => {
        setSelectedStartupType(selected.name);
        setSelectedStartupTypeId(selected.id);
    }
    const passSelectedMonth = (selected) => setSelectedMonth(selected);
    const passSelectedYear = (selected) => setSelectedYear(selected);
    const selectPriceResponse = (response) => {
        setSelectedPriceResponse(response);
        if (selectedPriceResponse === ASKING_PRICE_RESPONSE[0]) {
            setKnowingPrice(1);
        } else {
            setKnowingPrice(0);
        }
    }

    console.log(selectedStartupType);

    const basicInfoFormIsValid = aboutCompanyTextInputIsValid && annualRevenueInputIsValid && numOfCustomersInputIsValid && startupTeamSizeInputIsValid && !!selectedPriceResponse;

    const submitBasicInfo = (evt) => {
        evt.preventDefault();
        if (!basicInfoFormIsValid) return;
        const basicInfoData = {
            id: startupData?.startup_id,
            startup_type: selectedStartupType,
            about_company: startupData?.about,
            annual_revenue: startupData?.annual_recurring_revenue,
            num_of_customers: startupData?.customers_number,
            month: selectedMonth,
            year: selectedYear,
            asking_price: startupData?.asking_price,
            team_size: startupData?.team_size
        };
        console.log(basicInfoData, "basicInfoData!!!!!");
        myStartupInfoCtx.passBasicInfoData(basicInfoData);
        onFinish();
    };

    const saveBasicInfo = () => {
        console.log(startup_id)
        if(startupData?.id){
            let id = startupData.id;
            axios.put(`${process.env.REACT_APP_API_URL}/startup/basic-info/update`, {
                'id': id,
                'startup_id': startup_id,
                'type_id': selectedStartupTypeId,
                'about': enteredAboutCompanyText,
                'annual_recurring_revenue': enteredAnnualRevenue,
                'customers_number': enteredNumOfCustomers,
                'date_founded': moment(selectedMonth + selectedYear).format("MMMM, YYYY"),
                'asking_price': knowingPrice,
                'team_size': enteredStartupTeamSize
            }).then(res => {
                setStartupData(res.data);
                console.log(res.data);
            })
        }
        else {
            axios.put(`${process.env.REACT_APP_API_URL}/startup/basic-info/update`, {
                'startup_id': startup_id,
                'type_id': selectedStartupTypeId,
                'about': enteredAboutCompanyText,
                'annual_recurring_revenue': enteredAnnualRevenue,
                'customers_number': enteredNumOfCustomers,
                'date_founded': moment(selectedMonth + selectedYear).format("MMMM, YYYY"),
                'asking_price': knowingPrice,
                'team_size': enteredStartupTeamSize
            }).then(res => {
                setStartupData(res.data);
                console.log(res.data);
            })
        }
        
        
    }

    


    return (
        <div className="selling-financial-details">
            <div className="selling-financial-details__info">
                <h5 className="selling-financial-details__title">
                    Basic information about startup numbers and history
                </h5>
                <h4 className="selling-financial-details__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="sellingDetailsForm" id="selling_details_form" onSubmit={submitBasicInfo}>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Startup type </label>
                    <MyStartupDropdown
                        dropdownOptions={startups}
                        dropdownClassName={"startup-type__dropdown"}
                        onPass={passSelectedStartupType}
                        selected={selectedStartupType}
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
                        className={`selling-details__textarea ${aboutCompanyTextInputIsInvalid && "invalid"}`}
                        value={enteredAboutCompanyText}
                        onChange={changeAboutCompanyTextInputValueHandler}
                        onBlur={blurAboutCompanyTextInputHandler}
                    />
                    {aboutCompanyTextInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-financial-details__input ${annualRevenueInputIsInvalid && "invalid"}`}
                        value={enteredAnnualRevenue}
                        onChange={changeAnnualRevenueInputValueHandler}
                        onBlur={blurAnnualRevenueInputHandler}
                    />
                    {annualRevenueInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
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
                        className={`selling-financial-details__input ${numOfCustomersInputIsInvalid && "invalid"}`}
                        value={enteredNumOfCustomers}
                        onChange={changeNumOfCustomersInputValueHandler}
                        onBlur={blurNumOfCustomersInputHandler}
                    />
                    {numOfCustomersInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
                </div>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Date founded </label>
                    <div className="basic-info__dropdown-box">
                        <MyStartupDropdown
                            dropdownOptions={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                            dropdownClassName={"months__dropdown"}
                            onPass={passSelectedMonth}
                            selected={selectedMonth}
                        />
                        <MyStartupDropdown
                            dropdownOptions={[
                                "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991"
                            ]}
                            dropdownClassName={"years__dropdown"}
                            onPass={passSelectedYear}
                            selected={selectedYear}
                        />
                    </div>
                </div>
                <div className="selling-details__input-box">
                    <label className="selling-details__label"> Asking price </label>
                    <div className="basic-info__checkbox">
                        {
                            ASKING_PRICE_RESPONSE.map((response, index) => {
                                return (
                                    <label className="asking-price__label" key={index}>
                                        <input
                                            type="radio"
                                            className="asking-price__input"
                                            name="askingPrice"
                                            value={selectedPriceResponse}
                                            onChange={selectPriceResponse.bind(null, response)}
                                        />
                                        {response}
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
                        className={`selling-financial-details__input ${startupTeamSizeInputIsInvalid && "invalid"}`}
                        value={enteredStartupTeamSize}
                        onChange={changeStartupTeamSizeInputValueHandler}
                        onBlur={blurStartupTeamSizeInputHandler}
                    />
                    {startupTeamSizeInputIsInvalid && <p className="invalid-input-msg"> {invalid_input_msg} </p>}
                </div>
                <div className="selling-financial-details__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                        disabled={!basicInfoFormIsValid}
                        onClick={saveBasicInfo}
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

export default BasicInformationNewForm;
