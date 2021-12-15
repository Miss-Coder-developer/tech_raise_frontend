import React, { useState } from 'react';
import BasicInformationEditingForm from '../../../forms/editing-forms/BasicInformationEditingForm';
import BasicInformationNewForm from '../../../forms/new-forms/basicInformationNewForm/BasicInformationNewForm';
import BasicInformationFilledForm from '../../../forms/filled-forms/basicInformationFilledForm/BasicInformationFilledForm';
import './BasicInformation.scss';


const BasicInformation = (props) => {
    const [basicInformationFormIsOpen, setBasicInformationFormIsOpen] = useState(false);
    const [basicInformationFormIsFilled, setBasicInformationFormIsFilled] = useState(false);
    const [basicInformationFormIsBeingEdited, setBasicInformationFormIsBeingEdited] = useState(false);

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
                        startup_id={props.startup_id}
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
