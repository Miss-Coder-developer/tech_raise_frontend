import React, { useState } from 'react';
import MyStartupDropdown from '../../components/UI/dropdowns/MyStartupDropdown';
import './Metrics.scss';


const Metrics = () => {
    const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("Google Analytics");

    const passSelectedPaymentPlan = (selected) => setSelectedPaymentPlan(selected);

    return (
        <section className="metrics-main__container wrapper">
            <div className="metrics-main__row">
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