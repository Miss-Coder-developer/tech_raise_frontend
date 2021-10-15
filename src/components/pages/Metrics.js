import React from 'react';
import { my_startup_icons } from '../../dummy_datas/Icons';
import './Metrics.css';


const Metrics = () => {
    return (
        <section className="founder-main__container">
            <div className="founder-main__metrics">
                <div className="metrics__payment-processes">
                    <div className="selling-financial-details__show-dropdown show-dropdown">
                        <p className="selling-financial-details__selected"> Google Analytics </p>
                        <img src={ my_startup_icons.down_arrow_icon } alt="down arrow" />
                    </div>
                </div>
                <button 
                    type="button" 
                    className="metrics__update-data-btn"
                    // onClick={}
                >
                    Update data
                </button>
            </div>
            <div className="metrics__content">
                <h2 className="content__info"> There's nothing here yet </h2>
            </div>
        </section>
    );
};

export default Metrics;