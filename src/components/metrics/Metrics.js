import React from 'react'
import './metrics.scss'
import MyStartupButton from '../../components/UI/buttons/MyStartupButton';


const Metrics = () => {
    return (
        <div className="founder-main__metrics">
                <h2 className="metrics__title"> Metrics </h2>
                <div className="metrics__action-box">
                    <div className="action-box__content">
                        <h2 className="metrics__suggestion"> Want to sell your startup faster? Add metrics! </h2>
                        <p className="metrics__description"> 
                            Metrics give potential buyers greater insight into your business and will attract more acquisition offers for your startup. 
                        </p>
                        <MyStartupButton 
                            className="improve-listing__add-metrics-butn"
                            label="Add metrics"
                            // onButnClick={}
                        />
                    </div>
                </div>
        </div>
    );
};

export default Metrics;


