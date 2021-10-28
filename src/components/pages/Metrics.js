import React, { useState } from 'react';
import MyStartupDropdown from '../UI/dropdowns/MyStartupDropdown';
import './Metrics.scss';


const Metrics = () => {
    const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("Google Analytics");

    const passSelectedPaymentPlan = (selected) => setSelectedPaymentPlan(selected);

    return (
        <section className="founder-main__container">
            <div className="founder-main__metrics">
                <MyStartupDropdown 
                    dropdownOptions={ ["Google Analytics", "Stripe", "Chartmogul", "Baremetrics", "ProfitWell"] }
                    dropdownClassName={ "metrics__dropdown" }
                    onPass={ passSelectedPaymentPlan }
                    selected={ selectedPaymentPlan }
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