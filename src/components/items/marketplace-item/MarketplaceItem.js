import React  from 'react'
import './marketplaceItem.scss'
import dolarIcon from './../../../assets/icons/dolarIcon.png'
import dorIcon from './../../../assets/icons/dore.png'
import graphicIcon from './../../../assets/icons/graphic.png'


const MarketplaceItem = ({projectLink, graphic , openWeb}) => {
    return (
        <article className="marketplaceItem">
            <div className="marketplaceItem__content">
                <h2 className="marketplaceItem__title">Public information</h2>
                <p className="marketplaceItem__subtitle">Everyone on MicroAcquire can view these details</p>
                <div className="marketplaceItem__block">
                    <div>
                        <p className="marketplaceItem__block-subtitle">Startup type</p>
                        <h2 className="marketplaceItem__block-title">eCommerce</h2>
                    </div>
                    {
                        projectLink !== '' ? (
                            <a href={projectLink} target='_blank' rel='noreferrer'  className="marketplaceItem__link">Finance with Clearco</a>
                        ) : null
                    }
                </div>
                <p className="marketplaceItem__subtitle">Description</p>
                <p className="marketplaceItem__text">Profitable DTC eCommerce with $750,000 in TTM revenue and $50,000 in TTM profit selling indoor plants from our greenhouse to consumers all around the US. We service</p>
                <div className='marketplaceItem__buttons'>
                    <button type='button' className='marketplaceItem__add'>Add to fovorites</button>
                    <button type='button' className='marketplaceItem__startup'>Hide this startup</button>
                </div>
            </div>
            <div className="marketplaceItem__datas">
                <div className="marketplaceItem__datas-btn">
                    {
                        graphic ? (
                            <button className='marketplaceItem__datas-icon'>
                                <img src={graphicIcon} alt='dorIcon11'/>
                            </button>
                        ) : null
                    }
                    {
                        openWeb ? (
                            <button className='marketplaceItem__datas-icon'>
                                <img src={dorIcon} alt='dorIcon'/>
                            </button>
                        ) : null
                    }
                </div>
                <section className='marketplaceItem__datas__container'>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>$ 502.85 K</h3>
                    </article>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>$ 1.11 M</h3>
                    </article>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>10-100</h3>
                    </article>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>Apr 2017</h3>
                    </article>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>16</h3>
                    </article>
                    <article className='marketplaceItem__datas__item'>
                        <img src={dolarIcon} alt='dolar icon' className='marketplaceItem__datas__icon' />
                        <p className='marketplaceItem__datas__text'>Annual profit</p>
                        <h3 className='marketplaceItem__datas__price'>$ 2.21 M</h3>
                    </article>
                </section>
            </div>
        </article>
    );
};

export default MarketplaceItem
