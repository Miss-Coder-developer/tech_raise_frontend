import React from 'react';
import MyStartupButton from '../UI//buttons/MyStartupButton';
import ImproveListingCard from '../UI/wrapper-cards/ImproveListingCard';
import './MyStartup.css';
import PublicInfo from '../items/PublicInfo';
import CompanyFeatures from '../items/CompanyFeatures';
import SellingDetails from '../items/SellingDetails';
import SellingFinancialDetails from '../items/SellingFinancialDetails';


const MyStartup = () => {
    return (
        <section className="founder-main__container">
            <div className="founder-main__improve-listing">
                <h2 className="improve-listing__title"> Improve your listing </h2>
                <div className="improve-listing__container">
                    <ImproveListingCard 
                        infoTitle="Your listing is 20% complete"
                        infoText="Once complete, we'll review your listing and then add your startup to the marketplace"
                        isLoading={ true }
                    >
                        <MyStartupButton 
                            className="improve-listing__completion-butn"
                            label="Complete Your listing"
                            // onButnClick={}
                        />
                    </ImproveListingCard>
                    <ImproveListingCard 
                        infoTitle="Do you want to sell your startup faster?"
                        infoText="Add metrics so that potential buyers can get more useful information and opt for your startup"
                        isLoading={ false }
                    >
                        <MyStartupButton
                            className="improve-listing__add-metrics-butn"
                            label="Add metrics"
                            // onButnClick={}
                        />
                    </ImproveListingCard>
                    <ImproveListingCard 
                        infoTitle="Need professional help selling your startup?"
                        infoText="Search from 100s of experienced advisors and hire one today"
                        isLoading={ false }
                    >
                        <MyStartupButton
                            className="improve-listing__add-metrics-butn"
                            label="Find an advisor"
                            // onButnClick={}
                        />
                    </ImproveListingCard>
                </div>
            </div>
            <div className="founder-main__informations">
                <div className="founder-main__public-info">
                    <h2 className="public-info__title"> Public information </h2>
                    <p className="public-info__text"> Everyone on MicroAcquire can view these details </p>
                    <div className="public-info__items">
                        <PublicInfo />
                        <CompanyFeatures />
                        <SellingDetails />
                        <SellingFinancialDetails />
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
        </section>
    );
};

export default MyStartup;