import React, { useState, useEffect, useContext } from 'react';
import BasicInformationEditingForm from '../../../forms/editing-forms/BasicInformationEditingForm';
import BasicInformationNewForm from '../../../forms/new-forms/basicInformationNewForm/BasicInformationNewForm';
import BasicInformationFilledForm from '../../../forms/filled-forms/basicInformationFilledForm/BasicInformationFilledForm';
import {PassingInfoContext} from '../../../contexts/passing-info-context';
import axios from 'axios';
import './BasicInformation.scss';
import moment from 'moment';


const BasicInformation = (props) => {
    const [basicInformationFormIsOpen, setBasicInformationFormIsOpen] = useState(false);
    const [basicInformationFormIsFilled, setBasicInformationFormIsFilled] = useState(false);
    const [basicInformationFormIsBeingEdited, setBasicInformationFormIsBeingEdited] = useState(false);

    const myStartupInfoCtx = useContext(PassingInfoContext);

    useEffect(() => {
        let last;
        axios.get(`${process.env.REACT_APP_API_URL}/startup/basic-info/get-one?startup_id=${props?.startup_id}`)
            .then((res) => {
                last = res.data[res.data.length - 1];
                setBasicInformationFormIsFilled(!!last);
                console.log(last);
                //setStartups(res.data);
                const basicInfoData = {
                    //id: startupData?.startup_id,
                    startup_type: props?.startups?.find(st=>st.id === last?.type_id)?.name,
                    about_company: last?.about,
                    annual_revenue: last?.annual_recurring_revenue,
                    num_of_customers: last?.customers_number,
                    month: moment(last.date_founded).format('MMM'),
                    year: moment(last.date_founded).format('yyyy'),
                    asking_price: last?.asking_price,
                    team_size: last?.team_size,

                };
                console.log(basicInfoData, "basicInfoData!!!!!");
                myStartupInfoCtx.passBasicInfoData(basicInfoData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    const box_class_name = (basicInformationFormIsOpen || basicInformationFormIsBeingEdited || basicInformationFormIsFilled) ? "public-info" : "public-info__item-box";

    return (
        <div className={ box_class_name }>
            {
                (basicInformationFormIsOpen) 
                ? (
                    <BasicInformationNewForm 
                        onClose={ () => setBasicInformationFormIsOpen(false) }
                        onFinish={ () => { 
                            setBasicInformationFormIsFilled(true);
                            setBasicInformationFormIsOpen(false);
                        } }
                        startup_id={props?.startup_id}
                        startups={props.startups}
                    />
                )
                : (basicInformationFormIsFilled)
                ? (
                    <BasicInformationFilledForm 
                        onEdit={ () => {
                            setBasicInformationFormIsFilled(false);
                            setBasicInformationFormIsBeingEdited(true);
                        } } 
                    />
                )
                : (basicInformationFormIsBeingEdited)
                ? (
                    <BasicInformationEditingForm 
                        onClose={ () => { 
                            setBasicInformationFormIsBeingEdited(false);
                            setBasicInformationFormIsOpen(false);
                            setBasicInformationFormIsFilled(true);
                        } }
                        onFinish={ () => {
                            setBasicInformationFormIsFilled(true);
                            setBasicInformationFormIsBeingEdited(false);
                        } }
                        startup_id={props?.startup_id}
                        startups={props.startups}
                    />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Basic information </h4>
                        <p className="public-info__description">  About startup numbers and history </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setBasicInformationFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default BasicInformation;
