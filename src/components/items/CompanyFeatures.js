import React, { useState, useRef } from 'react';
import './CompanyFeatures.css';
import { GROWTH_OPPORTUNITY_HIGHLIGHTS, KEY_ASSETS } from '../../datas/MyStartupDatas';


const CompanyFeatures = () => {
    const [companyFeaturesFormIsOpen, setCompanyFeaturesFormIsOpen] = useState(false);
    const [growthHighlights, setGrowthHighlights] = useState(GROWTH_OPPORTUNITY_HIGHLIGHTS);
    const [keyAssets, setKeyAssets] = useState(KEY_ASSETS);
    // const [companyFtrsFormValidity, setCompanyFtrsFormValidity] = useState({
    //     businessModelInputIsValid: true,
    //     techStackInputIsValid: true,
    //     growthOppInputIsValid: true,
    //     keywordInputIsValid: true
    // });

    const businessModelInputRef = useRef();
    const techStackInputRef = useRef();
    const growthOppInputRef = useRef(); 
    const keywordsInputRef = useRef();

    const box_class_name = (companyFeaturesFormIsOpen) ? "public-info" : "public-info__item-box";
    const invalid_input_msg = "Value should be not empty";

    // const isNotEmpty = (input) => input.trim() !== "";

    // const {
    //     businessModelInputIsValid,
    //     techStackInputIsValid,
    //     growthOppInputIsValid,
    //     keywordInputIsValid,
    // } = companyFtrsFormValidity;
    
    // const companyFtrsFormIsValid = businessModelInputIsValid && 
    //                                 techStackInputIsValid &&
    //                                 growthOppInputIsValid &&
    //                                 keywordInputIsValid;

    const submitFormHandler = (event) => {
        event.preventDefault();

        // const enteredBusinessModel = businessModelInputRef.current.value;
        // const enteredTechStack = techStackInputRef.current.value;
        // const enteredGrowthOpp = growthOppInputRef.current.value;
        // const enteredKeywords = keywordsInputRef.current.value;

        // setCompanyFtrsFormValidity({
        //     businessModelInputIsValid: isNotEmpty(enteredBusinessModel),
        //     techStackInputIsValid: isNotEmpty(enteredTechStack),
        //     growthOppInputIsValid: isNotEmpty(enteredGrowthOpp),
        //     keywordInputIsValid: isNotEmpty(enteredKeywords)
        // });

        // if(!companyFtrsFormIsValid) {
        //     alert("not valid");
        //     return;
        // }

        // alert("valid");
    };

    return (
        <div className={ box_class_name }> 
            {
                (companyFeaturesFormIsOpen) 
                ? (
                    <div className="company-features">
                        <div className="company-features__info">
                            <h5 className="company-features__title"> Company features </h5>
                            <h4 className="company-features__required-warning"> All fields are required </h4>
                        </div>
                        <form 
                            action="#" 
                            name="companyFtrsForm"
                            id="company_ftrs_form"
                            onSubmit={ submitFormHandler } 
                        >
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
                                    value="Saas" // temporary
                                    ref={ businessModelInputRef }
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
                                    ref={ techStackInputRef }
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
                                    ref={ growthOppInputRef }
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
                                        {
                                            growthHighlights.slice(0, 5).map((growthHighlight, index) => {
                                                return (
                                                    <li key={ index }>
                                                        <label className="list__label">
                                                            <input 
                                                                type="checkbox"
                                                                className="list__input"
                                                            />
                                                            <div className="list__div" />
                                                            <span className="list__span"> 
                                                                { growthHighlight.title } 
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <ul className="growth-opportunity__list">
                                        {
                                            growthHighlights.slice(5, 10).map((growthHighlight, index) => {
                                                return (
                                                    <li key={ index }>
                                                        <label className="list__label">
                                                            <input 
                                                                type="checkbox"
                                                                className="list__input"
                                                            />
                                                            <div className="list__div" />
                                                            <span className="list__span"> 
                                                                { growthHighlight.title } 
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
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
                                        {
                                            keyAssets.slice(0, 5).map((keyAsset, index) => {
                                                return (
                                                    <li key={ index }>
                                                        <label className="list__label">
                                                            <input 
                                                                type="checkbox"
                                                                className="list__input"
                                                            />
                                                            <div className="list__div" />
                                                            <span className="list__span"> 
                                                                { keyAsset.title } 
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                    <ul className="key-assets__list">
                                        {
                                            keyAssets.slice(5, 9).map((keyAsset, index) => {
                                                return (
                                                    <li key={ index }>
                                                        <label className="list__label">
                                                            <input 
                                                                type="checkbox"
                                                                className="list__input"
                                                            />
                                                            <div className="list__div" />
                                                            <span className="list__span"> 
                                                                { keyAsset.title } 
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
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
                                    ref={ keywordsInputRef }
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
                                    onClick={ () => setCompanyFeaturesFormIsOpen(false) }
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                ) 
                : (
                    <div className="public-info__content">
                        <h4 className="public-info__suggestion"> Company features </h4>
                        <p className="public-info__description"> Highlights about your startup </p>
                        <button
                            type="button"
                            className="public-info__add-info-butn"
                            onClick={ () => setCompanyFeaturesFormIsOpen(true) }
                        >
                            + Add information
                        </button>
                    </div>
                ) 
            }
        </div>
    );
};

export default CompanyFeatures;
