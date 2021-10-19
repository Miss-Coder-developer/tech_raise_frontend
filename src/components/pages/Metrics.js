import React from 'react';
import MyStartupDropdown from '../UI/dropdowns/MyStartupDropdown';
import './Metrics.css';


const Metrics = () => {
    return (
        <section className="founder-main__container">
            <div className="founder-main__metrics">
                <MyStartupDropdown 
                    dropdownOptions={ ["Google Analytics", "Stripe", "Chartmogul", "Baremetrics", "ProfitWell"] }
                    dropdownClassName={ "metrics__dropdown" }
                />
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