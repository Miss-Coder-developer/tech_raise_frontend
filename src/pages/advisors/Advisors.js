import React, { useState } from 'react'
import AdvisorsItem from '../../components/items/advisors-item/AdvisorsItem';
import MarketplaceItem from '../../components/items/marketplace-item/MarketplaceItem';
// import { REQUESTS } from '../../dummy_datas/DummyData';
import './advisors.scss'

const Advisors = () => {
    const [advisorsType, setAdvisorsType] = useState('directory')

    const [CustomersSelect, setCustomersSelect] = useState(["State of Incorporation" , "California", "New-york", "Texas"])
    const [selectCustomersSelect, setSelectCustomersSelect] = useState("")
    const CompanyAddressoptionsStates = CustomersSelect.map(CompanyAddressoptionsStates => CompanyAddressoptionsStates)
    function CustomersSelectChange(e){
        setSelectCustomersSelect(CustomersSelect[e.target.value]);
    }


        
    const [item , setitem] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14])        
    const [visible, setVisible] = useState(4)

    const readMore = () => {
        setVisible((prevValue) => prevValue +4)
    }


    return (
        <div className="advisors wrapper">
            <div className='advisors__navigation'>
                <button type='button' className='advisors__navigation-btn' onClick={() => setAdvisorsType('directory')} >Directory</button>
                <button type='button' className='advisors__navigation-btn' onClick={() => setAdvisorsType('myAdvisors')} >My Advisors</button>
                <button type='button' className='advisors__navigation-btn' onClick={() => setAdvisorsType('requests')} setAdvisorsType={() => 'requests'}>Requests</button>
            </div>
            <div className={advisorsType === 'directory' ? 'advisors__page' : 'displayNone'}>
                <div className='advisors__menu'>
                    <input type='search' className='advisors__search-input' placeholder='Search'/>
                    <h1 className='advisors__title'>advisors</h1>
                    <div className='advisors__nav'>
                        <div className='advisors__item'>
                            <p className='advisors__subtitle'>Sort by</p>
                            <select className='advisors__select'>
                                <option className='advisors__option'>Relevance</option>
                                <option className='advisors__option'>2</option>
                                <option className='advisors__option'>3</option>
                                <option className='advisors__option'>4</option>
                            </select>
                        </div>
                        <div className='advisors__item'>
                            <p className='advisors__subtitle'>Hidden startups</p>
                            <label for="startups" className='advisors__item-checkbox'>Show  hidden  requests
                                <input type='checkbox' id="startups" className='advisors__item-checkbox-element'/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="advisors__main">
                    <div className='advisors__scroll'>
                        <div className="advisors__filter">
                            <div className='advisors__filter-types'>
                                <p className='advisors__filter-subtitle'>Startup types</p>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    SaaS
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    eCommerce
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Marketplace
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Shopify
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Mobile
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Crypto
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    DTC
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    MicroSaaS
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Other
                                </label>
                                <label for="startups" className='advisors__filter-checkbox'>
                                    <input type='checkbox' id="startups" className='advisors__filter-checkbox-element'/>
                                    Agency
                                </label>
                            </div>
                            <div className='advisors__filter-customers'>
                                <p className='advisors__filter-subtitle'>Deals closed</p>
                                <select className='advisors__filter__select-customers' onChange={CustomersSelectChange}> 
                                    {
                                        CompanyAddressoptionsStates.map((address, key) => <option value={key}>{address}</option>)
                                    }
                                </select>
                                <p className='advisors__filter-subtitle'>Preferred deal size</p>
                                <select className='advisors__filter__select-customers'>
                                    <option className='advisors__option'>All</option>
                                    <option className='advisors__option'>2</option>
                                    <option className='advisors__option'>3</option>
                                    <option className='advisors__option'>4</option>
                                </select>
                                <p className='advisors__filter-subtitle'>Advisors</p>
                                <select className='advisors__filter__select-customers'>
                                    <option className='advisors__option'>All</option>
                                    <option className='advisors__option'>2</option>
                                    <option className='advisors__option'>3</option>
                                    <option className='advisors__option'>4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        <div className="advisors__box">
                            <div className="advisors__container">

                                {item.slice(0, visible).map((item) => (
                                    <AdvisorsItem/>  
                                ))}
                            </div>
                            <button className='advisors__add-item' onClick={readMore}>Load more</button>
                        </div>
                </div>
            </div>
            <div className={advisorsType === 'myAdvisors' ? 'advisors__page' : 'displayNone' }>
                <div className='advisors__myAdvisors'>
                    <h1 className='advisors__myAdvisors__title'>You don’t have any requests yet</h1>
                    <p className='advisors__myAdvisors__text'>Don’t worry, you’ll get them. Let’s just wait for a little bit more!</p>
                </div>
            </div>
            <div className={advisorsType === 'requests' ?  'advisors__page' : 'displayNone'}>
                <div className='advisors__menu'>
                    {/* <input type='search' className='advisors__search-input' placeholder='Search'/> */}
                    {/* <h1 className='advisors__title'>advisors</h1> */}
                    <div className='advisors__nav'>
                        <label className='advisors__item advisors__status'>
                            <span className='advisors__page-subtitle'>Approval status</span>
                            <select className='advisors__page-select'>
                                <option className='advisors__option'>All</option>
                                <option className='advisors__option'>2</option>
                                <option className='advisors__option'>3</option>
                                <option className='advisors__option'>4</option>
                            </select>
                        </label>
                        <label className='advisors__item'>
                            <span className='advisors__page-subtitle'>Sort by</span>
                            <select className='advisors__select'>
                                <option className='advisors__option'>Relevance</option>
                                <option className='advisors__option'>2</option>
                                <option className='advisors__option'>3</option>
                                <option className='advisors__option'>4</option>
                            </select>
                        </label>
                        <div for="startups" className='advisors__item'>
                            <span className='advisors__page-subtitle'>Hidden startups</span>
                            <label className='advisors__item-checkbox'>Show  hidden  requests
                                <input type='checkbox' id="startups" className='advisors__item-checkbox-element'/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='advisors__requests-container'>
                    <div className='advisors__requests-cards'>
                        <AdvisorsItem/>
                        <AdvisorsItem/>
                    </div>
                    <div className='advisors__requests-messeges'>
                        <h1>111111</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advisors;



