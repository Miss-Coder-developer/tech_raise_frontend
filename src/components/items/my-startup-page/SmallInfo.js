import React from 'react';
import './SmallInfo.css';


const SmallInfo = ({ className, imgSrc, label, info }) => {
    const styles = `small-info ${ className }`;

    return (
        <div className={ styles }>
            <h6 className="small-info__label"> { label } </h6>
            <div className="small-info__info-box">
                <div className="small-info__icon">
                    <img src={ imgSrc } alt={ imgSrc } />
                </div>
                <h5 className="small-info__text"> { info } </h5>
            </div>
        </div>
    );
};

export default SmallInfo;
