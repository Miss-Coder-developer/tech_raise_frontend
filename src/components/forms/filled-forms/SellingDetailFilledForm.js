import React, { useContext } from 'react';
import { PassingInfoContext } from '../../contexts/passing-info-context';
import './SellingDetailFilledForm.css';


export default function SellingDetailFilledForm({ onEdit }) {
    const myStartupInfoCtx = useContext(PassingInfoContext);
    const {
        selling_purpose,
        funding
    } = myStartupInfoCtx.sellingDetailsData;

    return (
        <div className="info-container">
            <div className="selling">
                <h2 className="selling__title"> Selling details </h2>
                <button
                    type="button"
                    className="private-info__edit-info-butn"
                    onClick={ onEdit }
                >
                    Edit info
                </button>
            </div>
            <div className="selling__selling-purpose">
                <h6 className="selling-purpose__title"> Why are you selling? </h6>
                <h4 className="selling-purpose__text"> { selling_purpose } </h4>
            </div>
            <div className="selling__financing">
                <h6 className="financing__title"> Financing </h6>
                <h4 className="financing__text"> { funding } </h4>
            </div>
        </div>
    )
}
