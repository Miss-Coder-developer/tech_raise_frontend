import React, { useState } from 'react';
import SellingDetailsEditingForm from '../../../forms/editing-forms/SellingDetailsEditingForm';
import SellingDetailsFilledForm from '../../../forms/filled-forms/sellingDetailFilledForm/SellingDetailFilledForm';
import SellingDetailsNewForm from '../../../forms/new-forms/sellingDetailsNewForm/SellingDetailsNewForm';
import './SellingDetails.scss';


const SellingDetails = () => {
    const [sellingDetailsFormIsOpen, setSellingDetailsFormIsOpen] = useState(false);
    const [sellingDetailsFormIsFilled, setSellingDetailsFormIsFilled] = useState(false);
    const [sellingDetailsFormIsBeingEdited, setSellingDetailsFormIsBeingEdited] = useState(false);

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
                    />
                )
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Selling details </h4>
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
