import React , {useState} from 'react';
import MarketplaceItem from '../../components/items/marketplace-item/MarketplaceItem';
import './Marketplace.scss'


const Marketplace = () => {


    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)

    const [minAnnualRecurring, setMinAnnualRecurring] = useState(0)
    const [maxAnnualRecurring, setMaxAnnualRecurring] = useState(10000)

    const [minAnnualProfit, setMinAnnualProfit] = useState(0)
    const [maxAnnualProfit, setMaxAnnualProfit] = useState(10000)

    const [minStartupAge, setMinStartupAge] = useState(0)
    const [maxStartupAge, setMaxStartupAge] = useState(10000)

    const [CustomersSelect, setCustomersSelect] = useState(["State of Incorporation" , "California", "New-york", "Texas"])
    const [selectCustomersSelect, setSelectCustomersSelect] = useState("")
    const CompanyAddressoptionsStates = CustomersSelect.map(CompanyAddressoptionsStates => CompanyAddressoptionsStates)
    function CustomersSelectChange(e){
        setSelectCustomersSelect(CustomersSelect[e.target.value]);
    }

    
    const [item , setitem] = useState([
        {id:1 , graphic: true, openWeb: true , projectLink: 'https://app.microacquire.com/marketplace'},
        {id:2 , graphic: false, openWeb: true , projectLink: ''},
        {id:3 , graphic: true, openWeb: false, projectLink: 'DSADSA'},
        {id:4 , graphic: true, openWeb: false, projectLink: ''},
        {id:5 , graphic: false, openWeb: false,  projectLink: ''},
        {id:6 , graphic: false, openWeb: true, projectLink: ''},
        {id:7 , graphic: false, openWeb: true, projectLink: ''}
    ])        
    const [visible, setVisible] = useState(3)

    const readMore = () => {
        setVisible((prevValue) => prevValue +3)
    }


    // const [CustomersSelect, setCustomersSelect] = useState(["State of Incorporation" , "California", "New-york", "Texas"])
    // const [selectCustomersSelect, setSelectCustomersSelect] = useState("")
    // const CompanyAddressoptionsStates = CustomersSelect.map(CompanyAddressoptionsStates => CompanyAddressoptionsStates)
    // function CustomersSelectChange(e){
    //     setSelectCustomersSelect(CustomersSelect[e.target.value]);
    // }


    return (
        <section className="marketplace wrapper">
            {/* <h1 style={{fontFamily: "Poppins", fontWeight: "500", fontSize: "20px", color: "blue"}}> MAIN  PART HERE </h1> */}
             <div className='marketplace__menu'>
                <input type='search' className='marketplace__search-input' placeholder='Search'/>
                <h1 className='marketplace__title'>Marketplace</h1>
                <div className='marketplace__nav'>
                    <div className='marketplace__item'>
                        <p className='marketplace__subtitle'>Sort by</p>
                        <select className='marketplace__select'>
                            <option className='marketplace__option'>Unread</option>
                            <option className='marketplace__option'>2</option>
                            <option className='marketplace__option'>3</option>
                            <option className='marketplace__option'>4</option>
                        </select>
                    </div>
                    <div className='marketplace__item'>
                        <p className='marketplace__subtitle'>Hidden startups</p>
                        <label for="startups" className='marketplace__item-checkbox'>Show  hidden  requests
                            <input type='checkbox' id="startups" className='marketplace__item-checkbox-element'/>
                        </label>
                    </div>
                    <div className='marketplace__item'>
                        <p className='marketplace__subtitle'>Startups under offer</p>
                        <label for="offer" className='marketplace__item-checkbox'>Hide startups under offer
                            <input type='checkbox' id="offer" className='marketplace__item-checkbox-element'/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="marketplace__main">
                <div className='marketplace__scroll'>
                    <div className="marketplace__filter">
                        <div className='marketplace__filter-types'>
                            <p className='marketplace__filter-subtitle'>Startup types</p>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                SaaS
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                eCommerce
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Marketplace
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Shopify
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Mobile
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Crypto
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                DTC
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                MicroSaaS
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Other
                            </label>
                            <label for="startups" className='marketplace__filter-checkbox'>
                                <input type='checkbox' id="startups" className='marketplace__filter-checkbox-element'/>
                                Agency
                            </label>
                        </div>
                        <div className='marketplace__filter-price'>
                            <p className='marketplace__filter-subtitle'>Startup types</p>
                            <div className='marketplace__filter-price__item'>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMinPrice(e.target.value)} value={minPrice}/> 
                                <span className='marketplace__filter-price__item-line'/>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMaxPrice(e.target.value)} value={maxPrice}/>
                            </div>

                            <p className='marketplace__filter-subtitle'>Startup types</p>
                            <div className='marketplace__filter-price__item'>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMinAnnualRecurring(e.target.value)} value={minAnnualRecurring}/> 
                                <span className='marketplace__filter-price__item-line'/>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMaxAnnualRecurring(e.target.value)} value={maxAnnualRecurring}/>
                            </div>

                            <p className='marketplace__filter-subtitle'>Startup types</p>
                            <div className='marketplace__filter-price__item'>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMinAnnualProfit(e.target.value)} value={minAnnualProfit}/> 
                                <span className='marketplace__filter-price__item-line'/>
                                <input className='marketplace__filter-price__input' type='number' onChange={e => setMaxAnnualProfit(e.target.value)} value={maxAnnualProfit}/>
                            </div>
                        </div>

                        <div className='marketplace__filter-age'>
                            <p className='marketplace__filter-subtitle'>Startup age</p>
                            <input type='range' min='0' max='20' onChange={e => setMinStartupAge(e.target.value)} value={minStartupAge}  className='marketplace__filter-range-age'/>
                            <div>
                                <p>{minStartupAge}</p>
                            </div>
                        </div>

                        <div className='marketplace__filter-customers'>
                            <p className='marketplace__filter-subtitle'>Number of customers</p>
                            {/* <select className='marketplace__filter__select-customers'>
                                <option className='marketplace__option'>All</option>
                                <option className='marketplace__option'>2</option>
                                <option className='marketplace__option'>3</option>
                                <option className='marketplace__option'>4</option>
                            </select> */}
                            <select className='marketplace__filter__select-customers' onChange={CustomersSelectChange}> 
                                {
                                    CompanyAddressoptionsStates.map((address, key) => <option value={key}>{address}</option>)
                                }
                            </select>
                            <p className='marketplace__filter-subtitle'>Metrics included</p>
                            <select className='marketplace__filter__select-customers'>
                                <option className='marketplace__option'>All</option>
                                <option className='marketplace__option'>2</option>
                                <option className='marketplace__option'>3</option>
                                <option className='marketplace__option'>4</option>
                            </select>
                            <p className='marketplace__filter-subtitle'>Open to offers</p>
                            <select className='marketplace__filter__select-customers'>
                                <option className='marketplace__option'>All</option>
                                <option className='marketplace__option'>2</option>
                                <option className='marketplace__option'>3</option>
                                <option className='marketplace__option'>4</option>
                            </select>
                            <p className='marketplace__filter-subtitle'>Under advisory</p>
                            <select className='marketplace__filter__select-customers'>
                                <option className='marketplace__option'>All</option>
                                <option className='marketplace__option'>2</option>
                                <option className='marketplace__option'>3</option>
                                <option className='marketplace__option'>4</option>
                            </select>
                            <p className='marketplace__filter-subtitle'>Startups</p>
                            <select className='marketplace__filter__select-customers'>
                                <option className='marketplace__option'>All</option>
                                <option className='marketplace__option'>2</option>
                                <option className='marketplace__option'>3</option>
                                <option className='marketplace__option'>4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="marketplace__box">
                    <div className="marketplace__container">


                    {/* <MarketplaceItem/>
                    <MarketplaceItem/>
                <MarketplaceItem/> */}


                        {item.slice(0, visible).map((item) => (
                            // <h1 className='pagination-item'>dsdfjkjl</h1>  
                            <MarketplaceItem projectLink={item.projectLink} graphic={item.graphic} openWeb={item.openWeb}/>  
                            ))}
                        <button className='marketplace__add-item' onClick={readMore}>Load more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marketplace;