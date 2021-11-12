import React from 'react'
import ImproveListingCard from '../improveListingCard/ImproveListingCard';
import MyStartupButton from '../../components/UI/buttons/MyStartupButton';
import '../../components/improveListing/improveListing.scss'


const Listing = () => {
    return(
        <div className="listing">
            <h2 className="listing__title"> Improve your listing </h2>
            <div className="listing__container">
                <ImproveListingCard 
                    infoTitle="Your listing is 20% complete"
                    infoText="Once complete, we'll review your listing and then add your startup to the marketplace"
                    isLoading={ true }
                >
                    <MyStartupButton 
                        className="listing__completion-butn"
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
                        className="listing__add-metrics-butn"
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
                        className="listing__add-metrics-butn"
                        label="Find an advisor"
                        // onButnClick={}
                    />
                </ImproveListingCard>
            </div>
        </div>
    )
}

export default Listing;