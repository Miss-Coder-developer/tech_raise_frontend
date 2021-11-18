import React, { useState, useContext } from 'react';
import './CompanyFeaturesNewForm.scss';
import { GROWTH_OPPORTUNITY_HIGHLIGHTS, KEY_ASSETS } from '../../../../datas/MyStartupDatas';
import GrowthHighlightItem from '../../../items/my-startup-page/growthHighlightItem/GrowthHighlightItem';
import KeyAssetsItem from '../../../items/my-startup-page/KeyAssetsItem';
import { useValidity } from '../../../../custom-hooks/form-validity';
import { PassingInfoContext } from '../../../contexts/passing-info-context';


function CompanyFeaturesNewForm({ onClose, onFinish }) {
    const [growthHighlights, setGrowthHighlights] = useState(GROWTH_OPPORTUNITY_HIGHLIGHTS);
    const [keyAssets, setKeyAssets] = useState(KEY_ASSETS);

    const myStartupInfoCtx = useContext(PassingInfoContext);

    const [selectedHighlights, setSelectedHighlights] = useState([]);
    const [selectedKeyAssets, setSelectedKeyAssets] = useState([]);

    const highlightIsValid = selectedHighlights.length !== 0;
    const keyAssetIsValid = selectedKeyAssets.length !== 0;

    const invalid_input_msg = "Value should be not empty";

    const isNotEmpty = value => value.trim() !== "";

    const {
        enteredValue: enteredBusinessModel,
        inputIsValid: businessModelInputIsValid,
        inputIsInvalid: businessModelInputIsInvalid,
        changeInputValueHandler: changeBusinessModelInputValueHandler,
        blurInputHandler: blurBusinessModelInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredTechStack,
        inputIsValid: techStackInputIsValid,
        inputIsInvalid: techStackInputIsInvalid,
        changeInputValueHandler: changeTechStackInputValueHandler,
        blurInputHandler: blurTechStackInputHandler
    } = useValidity(isNotEmpty);

    const {
        enteredValue: enteredGrowthOpportunity,
        inputIsValid: growthOpportunityInputIsValid,
        inputIsInvalid: growthOpportunityInputIsInvalid,
        changeInputValueHandler: changeGrowthOpportunityInputValueHandler,
        blurInputHandler: blurGrowthOpportunityInputHandler
    } = useValidity(isNotEmpty);
    
    const passHighlightStatus = (changedGrowthHighlight) => {
        setGrowthHighlights(growthHighlights.map(growthHighlight => {
            if(growthHighlight.id === changedGrowthHighlight.id) {
                return changedGrowthHighlight;
            }
            return growthHighlight;
        }));
        setSelectedHighlights(growthHighlights.filter(growthHighlight => growthHighlight.isChecked));
    };

    const passKeyAssetStatus = (changedKeyAsset) => {
        setKeyAssets(keyAssets.map(keyAsset => {
            if(keyAsset.id === changedKeyAsset.id) {
                return changedKeyAsset;
            }
            return keyAsset;
        }));
        setSelectedKeyAssets(keyAssets.filter(keyAsset => keyAsset.isChecked));
    };

    const {
        enteredValue: enteredKeywords,
        inputIsValid: keywordsInputIsValid,
        inputIsInvalid: keywordsInputIsInvalid,
        changeInputValueHandler: changeKeywordsInputValueHandler,
        blurInputHandler: blurKeywordsInputHandler
    } = useValidity(isNotEmpty);

    const companyFeaturesFormIsValid = businessModelInputIsValid && techStackInputIsValid && growthOpportunityInputIsValid && highlightIsValid && keyAssetIsValid && keywordsInputIsValid;

    const submitFormHandler = (event) => {
        event.preventDefault();
        if(!companyFeaturesFormIsValid) return;
        const companyFeaturesData = {
            id: Math.random().toString(),
            business_model: enteredBusinessModel,
            tech_stack: enteredTechStack,
            competitors: [],
            growth_opportunity: enteredGrowthOpportunity,
            growth_highlights: selectedHighlights,
            key_assets: selectedKeyAssets,
            keywords: enteredKeywords
        };
        console.log(companyFeaturesData);
        myStartupInfoCtx.passCompanyFeaturesData(companyFeaturesData);
        onFinish();
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
                        className={ `company-features__input ${ businessModelInputIsInvalid && "invalid" }` }
                        value={ enteredBusinessModel }
                        onChange={ changeBusinessModelInputValueHandler }
                        onBlur={ blurBusinessModelInputHandler }
                    />
                    { businessModelInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
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
                        className={ `company-features__input ${ techStackInputIsInvalid && "invalid" }` }
                        placeholder="React, Firebase, AWS"
                        value={ enteredTechStack }
                        onChange={ changeTechStackInputValueHandler }
                        onBlur={ blurTechStackInputHandler }
                    />
                    { techStackInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
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
                        className={ `company-features__input ${ growthOpportunityInputIsInvalid && "invalid" }` }
                        value={ enteredGrowthOpportunity }
                        onChange={ changeGrowthOpportunityInputValueHandler }
                        onBlur={ blurGrowthOpportunityInputHandler }
                    />
                    { growthOpportunityInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
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
                                        checked={ growthHighlight.isChecked }
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
                                        checked={ growthHighlight.isChecked }
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
                                        handleChange={ (evt) => passKeyAssetStatus({ ...keyAsset, isChecked:  evt.target.checked }) }
                                        checked={ keyAsset.isChecked }
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
                                        handleChange={ (evt) => passKeyAssetStatus({ ...keyAsset, isChecked:  evt.target.checked }) }
                                        checked={ keyAsset.isChecked }
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
                        className={ `company-features__input ${ keywordsInputIsInvalid && "invalid" }` }
                        value={ enteredKeywords }
                        onChange={ changeKeywordsInputValueHandler }
                        onBlur={ blurKeywordsInputHandler }
                    />
                    { keywordsInputIsInvalid && <p className="invalid-input-msg"> { invalid_input_msg } </p> }
                    <p className="info-msg"> * tags are separated by a comma and a space </p>
                </div> 
                <div className="company-features__actions">
                    <button
                        type="submit"
                        className="actions__save-btn"
                        disabled={ !companyFeaturesFormIsValid }
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