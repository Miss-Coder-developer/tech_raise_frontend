import React, { useState } from 'react';
import BasicInformationNewForm from '../../forms/new-forms/BasicInformationNewForm';
import './BasicInformation.css';


const BasicInformation = () => {
    const [basicInformationFormIsOpen, setBasicInformationFormIsOpen] = useState();

    const box_class_name = (basicInformationFormIsOpen) ? "public-info" : "public-info__item-box";

    return (
        <div className={ box_class_name }>
            {
                (basicInformationFormIsOpen) 
                ? (
                    <BasicInformationNewForm onClose={ () => setBasicInformationFormIsOpen(false) } />
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
