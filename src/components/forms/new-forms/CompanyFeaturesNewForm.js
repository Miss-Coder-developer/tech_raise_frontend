import React, { useState } from 'react';
import './CompanyFeaturesNewForm.css';
import { GROWTH_OPPORTUNITY_HIGHLIGHTS, KEY_ASSETS } from '../../../datas/MyStartupDatas';
import GrowthHighlightItem from '../../items/my-startup-page/GrowthHighlightItem';
import KeyAssetsItem from '../../items/my-startup-page/KeyAssetsItem';


function CompanyFeaturesNewForm({ onClose }) {
    const [growthHighlights, setGrowthHighlights] = useState(GROWTH_OPPORTUNITY_HIGHLIGHTS);
    
    const passHighlightStatus = (changedGrowthHighlight) => {
        setGrowthHighlights(growthHighlights.map(growthHighlight => {
            if(growthHighlight.id === changedGrowthHighlight.id) {
                return changedGrowthHighlight;
            }
            return growthHighlight;
        }));
    };

    const checkedHighlights = growthHighlights.filter(growthHighlight => growthHighlight.isChecked);

    const [companyFeaturesData, setCompanyFeaturesData] = useState({
        businessModel: "",
        techStack: "",
        competitors: [],
        growthOpportunity: "",
        checkedGrowthHighlights: checkedHighlights,

    });

    const invalid_input_msg = "Value should be not empty";

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(companyFeaturesData);
    };
        
    return (
        <div className="company-features">
            <div className="company-features__info">
                <h5 className="company-features__title"> Company features </h5>
                <h4 className="company-features__required-warning"> All fields are required </h4>
            </div>
            <form action="#" name="companyFtrsForm" id="company_ftrs_form" onSubmit={ submitFormHandler }>
                <div className="company-features__input-box">
                    <label 
                        htmlFor="business_model_and_pricing"
                        className="company-features__label"
                    > 
                        What is your business model and pricing?
                    </label>
                    <input 
                        type="text"
                        id="business_model_and_pricing" 
                        className="company-features__input"
                        defaultValue="Saas" // temporary
                        // onChange={  }
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="company-features__input-box">
                    <label 
                        htmlFor="tech_stack"
                        className="company-features__label"
                    > 
                        What tech stack is this product built on?
                    </label>
                    <input 
                        type="text"
                        id="tech_stack" 
                        className="company-features__input invalid"
                        placeholder="React, Firebase, AWS"
                    />
                    <p className="invalid-input-msg"> { invalid_input_msg } </p>
                </div>   
                <div className="company-features__input-box">
                    <label 
                        htmlFor="competitors"
                        className="company-features__label"
                    > 
                        Who are your competitors?
                    </label>
                    <button
                        type="button"
                        className="company-features__add-butn"
                        // onClick={  }
                    >
                        + Add competitor
                    </button>
                </div>
                <div className="company-features__input-box">
                    <label 
                        htmlFor="growth_opportunity"
                        className="company-features__label"
                    > 
                        Growth opportunity
                    </label>
                    <input 
                        type="text"
                        id="growth_opportunity" 
                        className="company-features__input after-icon"
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                </div>
                <div className="company-features__input-box highlights">
                    <label 
                        htmlFor="growth_opportunity_highlights"
                        className="company-features__label"
                    > 
                        Growth opportunity (highlights)
                    </label>
                    <div className="growth-opportunity__box">
                        <ul className="growth-opportunity__list">
                            { growthHighlights.slice(0, 5).map((growthHighlight, index) => {
                                return (
                                    <GrowthHighlightItem 
                                        key={ index } 
                                        growthHighlight={ growthHighlight }
                                        handleChange={ (evt) => passHighlightStatus({ ...growthHighlight, isChecked: evt.target.checked }) } 
                                    />
                                );
                            }) }
                        </ul>
                        <ul className="growth-opportunity__list">
                            { growthHighlights.slice(5, 10).map((growthHighlight, index) => {
                                return (
                                    <GrowthHighlightItem 
                                        key={ index } 
                                        growthHighlight={ growthHighlight } 
                                        handleChange={ (evt) => passHighlightStatus({ ...growthHighlight, isChecked: evt.target.checked }) } 
                                    />
                                );
                            }) }
                        </ul>
                    </div>
                </div>
                <div className="company-features__input-box key-assets">
                    <label 
                        htmlFor="key_assets"
                        className="company-features__label"
                    > 
                        Key assets
                    </label>
                    <div className="key-assets__box">
                        <ul className="key-assets__list">
                            { KEY_ASSETS.slice(0, 5).map((keyAsset, index) => {
                                return (
                                    <KeyAssetsItem 
                                        key={ index } 
                                        keyAsset={ keyAsset } 
                                    />
                                );
                            }) }
                        </ul>
                        <ul className="key-assets__list">
                            { KEY_ASSETS.slice(5, 9).map((keyAsset, index) => {
                                return (
                                    <KeyAssetsItem 
                                        key={ index } 
                                        keyAsset={ keyAsset } 
                                    />
                                );
                            }) }
                        </ul>
                    </div>
                </div>
                <div className="company-features__input-box keywords">
                    <label 
                        htmlFor="keywords"
                        className="company-features__label"
                    > 
                        keywords
                    </label>
                    <input 
                        type="text"
                        id="keywords" 
                        className="company-features__input"
                        value="keywords 1, keywords 2, keywords 3" // temporary
                    />
                    {/* <p className="invalid-input-msg"> { invalid_input_msg } </p> */}
                    <p className="info-msg"> * tags are separated by a comma and a space </p>
                </div> 
                <div className="company-features__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                    >
                        Save
                    </button>
                    <button
                        type="reset"
                        className="actions__cancel-btn"
                        onClick={ onClose }
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CompanyFeaturesNewForm;
