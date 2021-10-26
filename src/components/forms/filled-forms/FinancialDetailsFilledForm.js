import React, { useContext } from 'react';
import { PassingInfoContext } from '../../contexts/passing-info-context';
import './FinancialDetailsFilledForm.css';


export default function FinancialDetailsFilledForm({ onEdit }) {
    const myStartupInfoCtx = useContext(PassingInfoContext);
    const {
        financial_sum,
        total_revenue,
        total_profit,
        annual_revenue,
        annual_profit
    } = myStartupInfoCtx.financialDetailsData;

    return (
        <div className="info-container">
            <div className="selling">
                <h2 className="selling__title"> Financial details </h2>
                <button
                    type="button"
                    className="private-info__edit-info-butn"
                    onClick={ onEdit }
                >
                    Edit info
                </button>
            </div>
            <div className="selling__selling-purpose">
                <h6 className="selling-purpose__title"> Availability of financial summary or P&L? </h6>
                <h4 className="selling-purpose__text"> { financial_sum } </h4>
            </div>
            <div className="selling__financing">
                <h6 className="financing__title"> Total revenue last month </h6>
                <h4 className="financing__text"> { `$ ${ total_revenue } K USD` } </h4>
            </div>
            <div className="selling__financing">
                <h6 className="financing__title"> Total profit last month </h6>
                <h4 className="financing__text"> { `$ ${ total_profit } K USD` } </h4>
            </div>
            <div className="selling__financing">
                <h6 className="financing__title"> Total revenue over the past 12 months </h6>
                <h4 className="financing__text"> { `$ ${ annual_revenue } K USD` } </h4>
            </div>
            <div className="selling__financing">
                <h6 className="financing__title"> Total profit over the past 12 months </h6>
                <h4 className="financing__text"> { `$ ${ annual_profit } K USD` } </h4>
            </div>
        </div>
    );
}
