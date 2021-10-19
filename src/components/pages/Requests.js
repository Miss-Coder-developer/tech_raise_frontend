import React from 'react';
import './Requests.css';
import MyStartupDropdown from '../UI/dropdowns/MyStartupDropdown';


const Requests = () => {
    return (
        <section className="founder-main__container">
            <div className="founder-main__requests">
                <h3 className="requests__title"> Requests </h3>
                <p className="requests__text"> All messages from potential buyers will be here </p>
            </div>
            <div className="requests__select-actions">
                <div className="requests__input-box">
                    <label 
                        htmlFor="approval-status"
                        className="requests__label"
                    > 
                        Approval status
                    </label>
                    <MyStartupDropdown
                        dropdownOptions={ ["All", "Waiting", "Rejected", "Approved"] }
                        dropdownClassName={ "aproval-status__dropdown" }
                    />
                </div>
                <div className="requests__sort-and-hidden">
                    <div className="requests__input-box">
                        <label 
                            htmlFor="requests-sort-by"
                            className="requests__label"
                        > 
                            Sort by
                        </label>
                        <MyStartupDropdown 
                            dropdownOptions={ ["Unread", "Date requested: Oldest", "Date requested: Newest"] }
                            dropdownClassName={ "sort-by__dropdown" }
                        />
                    </div>
                    <div className="requests__hidden-requests">
                        <p className="requests__title"> Hidden requests </p>
                        <label className="hidden-requests__label">
                            Show  hidden  requests
                            {/* <div className="hidden-requests__checkbox" /> */}
                            <input 
                                type="checkbox" 
                                className="hidden-requests__input"
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className="requests__content">
                <div>
                    <h2 className="content__info"> You don’t have any requests yet </h2>
                    <p className="content__text"> 
                        Don’t worry, you’ll get them. Let’s just wait for a little bit more!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Requests;