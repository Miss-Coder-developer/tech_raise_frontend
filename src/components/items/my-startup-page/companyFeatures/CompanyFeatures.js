import React, {useEffect, useState, useContext} from 'react';
import CompanyFeaturesNewForm from '../../../forms/new-forms/companyFeaturesNewForm/CompanyFeaturesNewForm';
import CompanyFeaturesFilledForm from '../../../forms/filled-forms/companyFeaturesFilledForm/CompanyFeaturesFilledForm';
import CompanyFeaturesEditingForm from '../../../forms/editing-forms/CompanyFeaturesEditingForm';
import './CompanyFeatures.scss';
import {PassingInfoContext} from '../../../contexts/passing-info-context';

import axios from "axios";
import moment from "moment";


const CompanyFeatures = (props) => {
    const [companyFeaturesFormIsOpen, setCompanyFeaturesFormIsOpen] = useState(false);
    const [companyFeaturesFormIsFilled, setCompanyFeaturesFormIsFilled] = useState(false);
    const [companyFeaturesFormIsBeingEdited, setCompanyFeaturesFormIsBeingEdited] = useState(false);

    let [growthHighlights, setGrowthHighlights] = useState(null);
    let [keyAssets, setKeyAssets] = useState(null);
    const myStartupInfoCtx = useContext(PassingInfoContext);

    const box_class_name = (companyFeaturesFormIsOpen || companyFeaturesFormIsBeingEdited || companyFeaturesFormIsFilled) ? "public-info" : "public-info__item-box";





    useEffect(() => {
        let last;
        axios.get(`${process.env.REACT_APP_API_URL}/startup/company-features/get-one?startup_id=${props?.startup_id}`)
            .then((res) => {
                last = res.data;
                setCompanyFeaturesFormIsFilled(!!last);
                console.log(last);
                //setStartups(res.data);
                const companyFeaturesData = {
                    id: res.data.id,
                    business_model: res.data.business_model_pricing,
                    tech_stack: res.data.tech_stack,
                    growth_opportunity: res.data.growth_opportunity,
                    growth_highlights: res.data.company_opportunities_list,
                    key_assets: res.data.company_assets_list,
                    keywords: res.data.company_keywords_list.map(d => d.name).join(' ')

                };
                console.log(companyFeaturesData, "basicInfoData!!!!!");
                myStartupInfoCtx.passCompanyFeaturesData(companyFeaturesData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function getGrowthHighlights() {
        let growth_highlights = myStartupInfoCtx.companyFeaturesData.growth_highlights;

        console.log(growth_highlights)
        let gHiglights = growthHighlights.map(gh => {
            gh.isChecked = !!growth_highlights?.find(g => g.id === gh.id);
            return gh;
        });
        console.log(gHiglights)
        setGrowthHighlights(gHiglights);
    }

    function getKeyAssets() {
        let key_assets = myStartupInfoCtx.companyFeaturesData.key_assets;

        console.log(key_assets)
        let gHiglights = keyAssets.map(gh => {
            gh.isChecked = !!key_assets?.find(g => g.id === gh.id);
            return gh;
        });
        console.log(gHiglights)
        setKeyAssets(gHiglights);
    }

    useEffect(() => {
        const fetch = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/startup/company-features/get-growth-opportunities`)
                .then((res) => {
                    console.log(res.data);
                    setGrowthHighlights(res.data.map(growthHighlight => {
                        return {...growthHighlight, isChecked: false}
                    }));
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        fetch();

    }, []);

    useEffect(() => {
        const fetch = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/startup/company-features/get-key-assets`)
                .then((res) => {
                    console.log(res.data);
                    setKeyAssets(res.data.map(keyAsset => {
                        return {...keyAsset, isChecked: false}
                    }));
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        fetch();
    }, []);


    return (
        <div className={box_class_name}>
            {
                (companyFeaturesFormIsOpen)
                    ? (
                        <CompanyFeaturesNewForm
                            onClose={() => setCompanyFeaturesFormIsOpen(false)}
                            onFinish={() => {
                                setCompanyFeaturesFormIsFilled(true);
                                setCompanyFeaturesFormIsOpen(false);
                            }}
                            startup_id={props?.startup_id}
                            highlights={growthHighlights}
                            assets={keyAssets}
                        />
                    )
                    : (companyFeaturesFormIsFilled)
                    ? (
                        <CompanyFeaturesFilledForm
                            onEdit={() => {
                                getGrowthHighlights();
                                getKeyAssets();
                                setCompanyFeaturesFormIsFilled(false);
                                setCompanyFeaturesFormIsBeingEdited(true);
                            }}
                        />
                    )
                    : (companyFeaturesFormIsBeingEdited)
                        ? (
                            <CompanyFeaturesEditingForm
                                onClose={() => {
                                    setCompanyFeaturesFormIsBeingEdited(false);
                                    setCompanyFeaturesFormIsOpen(false);
                                    setCompanyFeaturesFormIsFilled(true);
                                }}
                                onFinish={() => {
                                    setCompanyFeaturesFormIsFilled(true);
                                    setCompanyFeaturesFormIsBeingEdited(false);
                                }}
                                startup_id={props?.startup_id}
                                highlights={growthHighlights}
                                assets={keyAssets}
                            />
                        )
                        : (
                            <div className="public-info__content">
                                <h4 className="public-info__suggestion"> Company features </h4>
                                <p className="public-info__description"> Highlights about your startup </p>
                                <button
                                    type="button"
                                    className="public-info__add-info-butn"
                                    onClick={() => setCompanyFeaturesFormIsOpen(true)}
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
