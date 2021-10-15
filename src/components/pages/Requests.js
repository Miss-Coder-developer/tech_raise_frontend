import React from 'react';
import './Requests.css';
import { my_startup_icons } from '../../dummy_datas/Icons';


const Requests = () => {
    return (
        <section className="founder-main__container">
            <div className="founder-main__requests">
                <h3 className="requests__title"> Requests </h3>
                <p className="requests__text"> All messages from potential buyers will be here </p>
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