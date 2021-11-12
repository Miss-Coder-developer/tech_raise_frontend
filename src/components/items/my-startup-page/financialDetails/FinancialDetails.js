import React, { useState } from 'react';
import FinancialDetailsNewForm from '../../../forms/new-forms/financialDetailsNewForm/FinancialDetailsNewForm';
import FinancialDetailFilledForm from '../../../forms/filled-forms/financialDetailsFilledForm/FinancialDetailsFilledForm';
import FinancialDetailsEditingForm from '../../../forms/editing-forms/FinancialDetailsEditingForm';
import './FinancialDetails.scss';


const FinancialDetails = () => {
    const [financialDetailsFormIsOpen, setFinancialDetailsFormIsOpen] = useState(false);
    const [financialDetailsFormIsFilled, setFinancialDetailsFormIsFilled] = useState(false);
    const [financialDetailsFormIsBeingEdited, setFinancialDetailsFormIsBeingEdited] = useState(false);

    const boxClassName = (financialDetailsFormIsOpen || financialDetailsFormIsBeingEdited || financialDetailsFormIsFilled) ? "public-info" : "public-info__item-box";

    return (
        <div className={ boxClassName }>
            {
                (financialDetailsFormIsOpen)
                ? (
                    <FinancialDetailsNewForm 
                        onClose={ () => setFinancialDetailsFormIsOpen(false) } 
                        onFinish={ () => {
                            setFinancialDetailsFormIsFilled(true);
                            setFinancialDetailsFormIsOpen(false);
                        } }
                    />
                )
                : (financialDetailsFormIsFilled)
                ? (
                    <FinancialDetailFilledForm 
                        onEdit={ () => {
                            setFinancialDetailsFormIsBeingEdited(true);
                            setFinancialDetailsFormIsFilled(false);
                        } }
                    />
                )
                : (financialDetailsFormIsBeingEdited)
                ? (
                    <FinancialDetailsEditingForm 
                        onClose={ () => {
                            setFinancialDetailsFormIsBeingEdited(false);
                            setFinancialDetailsFormIsOpen(false);
                            setFinancialDetailsFormIsFilled(true);
                        } }
                        onFinish={ () => {
                            setFinancialDetailsFormIsFilled(true);
                            setFinancialDetailsFormIsBeingEdited(false);
                        } }
                    />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Selling Financial details </h4>
                        <p className="public-info__description"> Additional income information </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setFinancialDetailsFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                )
            }
            
        </div>
    );
};

export default FinancialDetails;
