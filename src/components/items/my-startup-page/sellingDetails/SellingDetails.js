import React, {useContext, useEffect, useState} from 'react';
import SellingDetailsEditingForm from '../../../forms/editing-forms/SellingDetailsEditingForm';
import SellingDetailsFilledForm from '../../../forms/filled-forms/sellingDetailFilledForm/SellingDetailFilledForm';
import SellingDetailsNewForm from '../../../forms/new-forms/sellingDetailsNewForm/SellingDetailsNewForm';
import './SellingDetails.scss';
import axios from "axios";
import moment from "moment";
import {PassingInfoContext} from "../../../contexts/passing-info-context";


const SellingDetails = (props) => {
    const [sellingDetailsFormIsOpen, setSellingDetailsFormIsOpen] = useState(false);
    const [sellingDetailsFormIsFilled, setSellingDetailsFormIsFilled] = useState(false);
    const [sellingDetailsFormIsBeingEdited, setSellingDetailsFormIsBeingEdited] = useState(false);

    const myStartupInfoCtx = useContext(PassingInfoContext);


    useEffect(() => {
        let last;
        axios.get(`${process.env.REACT_APP_API_URL}/startup/selling-details/get-one`, {params: {startup_id: props?.startup_id}})
            .then((res) => {
                last = res.data[res.data.length - 1];
                setSellingDetailsFormIsFilled(!!last);
                console.log(last);
                //setStartups(res.data);
                const sellingDetailsData = {
                    id: props?.startup_id,
                    selling_purpose: last.selling_why,
                    funding: last.funding,
                    financial_sum: last.financial_summary,
                    total_revenue: last.last_month_total_revenue,
                    total_profit: last.last_month_total_profit,
                    annual_revenue: last.last_year_total_revenue,
                    annual_profit: last.last_year_total_profit

                };
                console.log(sellingDetailsData, "basicInfoData!!!!!");
                myStartupInfoCtx.passSellingDetailsData(sellingDetailsData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);





    const box_class_name = (sellingDetailsFormIsOpen || sellingDetailsFormIsBeingEdited || sellingDetailsFormIsFilled) ? "public-info" : "public-info__item-box";

    return (
        <div className={ box_class_name }>
            {
                (sellingDetailsFormIsOpen)
                ? (
                    <SellingDetailsNewForm 
                        onClose={ () => setSellingDetailsFormIsOpen(false) } 
                        onFinish={ () => {
                            setSellingDetailsFormIsFilled(true);
                            setSellingDetailsFormIsOpen(false);
                        } }
                        startup_id={props?.startup_id}
                    />
                )
                : (sellingDetailsFormIsFilled)
                ? (
                    <SellingDetailsFilledForm
                        onEdit={ () => {
                            setSellingDetailsFormIsFilled(false);
                            setSellingDetailsFormIsBeingEdited(true);
                        } }
                    />
                )
                : (sellingDetailsFormIsBeingEdited)
                ? (
                    <SellingDetailsEditingForm 
                        onClose={ () => {
                            setSellingDetailsFormIsBeingEdited(false);
                            setSellingDetailsFormIsOpen(false);
                            setSellingDetailsFormIsFilled(true);
                        } }
                        onFinish={ () => {
                            setSellingDetailsFormIsFilled(true);
                            setSellingDetailsFormIsBeingEdited(false);
                        } }
                        startup_id={props?.startup_id} 
                    />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Financial details </h4>
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
