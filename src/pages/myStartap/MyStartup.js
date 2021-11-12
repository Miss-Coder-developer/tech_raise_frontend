import React, { useState } from 'react';
import MyStartupButton from '../../components/UI/buttons/MyStartupButton';
import Listing from '../../components/improveListing/ImproveListing'
import './MyStartup.scss';
import CompanyFeatures from '../../components/items/my-startup-page/companyFeatures/CompanyFeatures';
import SellingDetails from '../../components/items/my-startup-page/sellingDetails/SellingDetails';
import FinancialDetails from '../../components/items/my-startup-page/financialDetails/FinancialDetails';
import BasicInformation from '../../components/items/my-startup-page/basicInformation/BasicInformation';
import Metrics from '../../components/metrics/Metrics';


const MyStartup = () => {

    return (
        <section className="founder-main__container wrapper">
            <Listing/>
            <div className="informations">
                <div className="informations__public-info">
                    <h2 className="public-info__title"> Public information </h2>
                    <p className="public-info__text"> Everyone on MicroAcquire can view these details </p>
                    <div className="public-info__items">
                        <BasicInformation />
                        <CompanyFeatures />
                        <SellingDetails />
                        <FinancialDetails />
                    </div>
                </div>
                <div className="founder-main__private-info">
                    <div className="private-info__actions">
                        <h2 className="private-info__title"> Private information </h2>
                        <button
                            type="button"
                            className="private-info__edit-info-butn"
                            // onClick={}
                        >
                            Edit info
                        </button>
                    </div>
                    <p className="private-info__text"> Buyers will see this after you give access </p>
                    <p className="private-info__auto-approve"> Auto-approve buyers requests </p>
                    <p className="private-info__intro-text"> Video intro from the Founder </p>
                    <button
                        type="button"
                        className="private-info__watch-video-butn"
                        // onClick={}
                    >
                        Watch the video
                    </button>
                    <div className="private-info__user-info-box">
                        <p> Contact Name </p>
                        <h5> Tom </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Startup name </p>
                        <h5> Funnelnite </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Contact e-mail </p>
                        <a 
                            href="mailto:tom@Funnelnite.com" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            className="user-info-box__email"
                        >
                            tom@Funnelnite.com 
                        </a>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Website </p>
                        <a 
                            href="mailto:WWW.Funnelnite.com" 
                            target="_blank" 
                            rel="noreferrer noopener"
                            className="user-info-box__website"
                        >
                            WWW.Funnelnite.com 
                        </a>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Capital structure </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Use of funds </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Outstanding debts </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Previous equity fundraises  </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> Voting power </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box">
                        <p> The board of directors  </p>
                        <h5> Lorem ipson text </h5>
                    </div>
                    <div className="private-info__user-info-box-pitch">
                        <p> Pitch deck files </p>
                        <h5> Upload your file to share your vision with potential buyers </h5>
                    </div>
                    <div className="private-info__upload-files-box">
                        <label htmlFor="deck_file">
                            <div />
                            <span> Click to upload files </span>  
                        </label>
                        <input type="file" id="deck_file" />
                    </div>
                </div>
            </div>
            <Metrics/>
            {/* <div className="founder-main__metrics">
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
            </div> */}
        </section>
    );
};

export default MyStartup;
