import React from 'react';
import './RequestItem.scss';
import msgIcon from '../../../assets/icons/requests/msg.png';


function RequestItem({ request }) {
    return (
        <div className="request-item">
            <div className="request-item__user-info">
                <div className="user-info__first-box">
                    <div className="user-info__image">
                        <img src={ request.image } alt="user profile" />
                    </div>
                    <div className="user-info__name-and-site">
                        <h3 className="user-info__name"> { request.name } </h3>
                        <a href="##" className="user-info__site"> linkedin page </a>
                    </div>  
                </div>
                <div className="user-info__second-box">
                    <p className="user-info__about-me-title"> About me: </p>
                    <span className="user-info__about-me-text">
                        ”Buyer of SaaS apps that need a rescue or growth strategy. My team and I are good at marketing so we're always looking for potential acquisitions that may not be making a lot, but have a solid product and audience which needs more love. p.s. Your numbers need to make sense - Be realistic. Profits matter. ”
                    </span>
                </div>
            </div>
            <div className="request-item__actions-field">
                <div className="actions-field__first-box">
                    <h6 className="actions-field__message-date"> Request message from 17 October: </h6>
                    <h6 className="actions-field__make-visible"> Make this request visible </h6>
                </div>
                <h4 className="actions-field__title"> Interested to learn more. </h4>
                <div className="actions-field__second-box">
                    <div className="actions-field__btns">
                        <button
                            type="button"
                            className="actions-field__access-given-btn"
                            // onClick={}
                        >
                            Access given
                        </button>
                        <button
                            type="button"
                            className="actions-field__revoke-access"
                            // onClick={}
                        >
                            Revoke access
                        </button>
                    </div>
                    <button
                        type="button"
                        className="actions-field__open-msg-btn"
                        // onClick={}
                    >
                        <img src={ msgIcon } alt="msg opener" />
                    </button>   
                </div>
            </div>
        </div>
    );
}

export default RequestItem;