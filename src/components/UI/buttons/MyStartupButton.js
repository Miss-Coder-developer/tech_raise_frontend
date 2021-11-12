import React from 'react';
import './MyStartupButton.scss';


const MyStartupButton = ({ className, label, onButnClick, type }) => {
    const butnType = type || "button";
    const butnClassName = `my-startup-butn ${ className }`;

    return (
        <button
            type={ butnType }
            className={ butnClassName }
            // onClick={ onButnClick }
        >
            { label }
        </button>
    );
};

export default MyStartupButton;
