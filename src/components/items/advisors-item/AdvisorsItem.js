import React from 'react'
import './advisorsItem.scss'
import dolarIcon from './../../../assets/icons/dolarIcon.png'
import dorIcon from './../../../assets/icons/dore.png'
import avatar from './../../../assets/imges/requests/user-profile.png'
import view from './../../../assets/icons/requests/view.png'
// import avatar from './../../../assets/imges/'


const AdvisorsItem = () => {
    return (
        <article className="advisorsItem">
            <div className="advisorsItem__content">
                <div className='advisorsItem__user'>
                    <img src={ avatar } alt='avatar'  className='advisorsItem__avatar'/>
                    <div className='advisorsItem__user-data'>
                        <p className='advisorsItem__user-location'>Atlanta, Georgia</p>
                        <p className='advisorsItem__user-name'>Gane P</p>
                        <a href='https://www.linkedin.com/' target='blank'  className='advisorsItem__user-link'>linkedin page</a>
                    </div>
                    <div className='advisorsItem__user-icons'>
                        <img src={view} alt='view icon'  className='advisorsItem__user-icon'/>
                        <img src={view} alt='view icon'  className='advisorsItem__user-icon'/>
                    </div>
                </div>
 
                <h2 className="advisorsItem__subtitle">Expertise</h2>
                <p className="advisorsItem__title">M&A, Due Diligence, Valuation, Negotiations</p>
            </div>
            <div className="advisorsItem__datas">
                <div className="advisorsItem__datas__item">
                    <p className="advisorsItem__datas__text">Preferred deal size</p>
                    <h3 className="advisorsItem__datas__value">All</h3>
                </div>
                <div className="advisorsItem__datas__item">
                    <p className="advisorsItem__datas__text">On MicroAcquire since</p>
                    <h3 className="advisorsItem__datas__value">October 2021</h3>
                </div>
                <div className="advisorsItem__datas__item">
                    <p className="advisorsItem__datas__text">Deals closed</p>
                    <h3 className="advisorsItem__datas__value">10</h3>
                </div>
            </div>
            <button className="advisorsItem__datas__btn">Contact</button>
        </article>
    );
};

export default AdvisorsItem
