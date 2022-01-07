import React, {useEffect, useState} from 'react';
import CompanyFeaturesNewForm from '../../../forms/new-forms/companyFeaturesNewForm/CompanyFeaturesNewForm';
import CompanyFeaturesFilledForm from '../../../forms/filled-forms/companyFeaturesFilledForm/CompanyFeaturesFilledForm';
import CompanyFeaturesEditingForm from '../../../forms/editing-forms/CompanyFeaturesEditingForm';
import './CompanyFeatures.scss';
import axios from "axios";


const CompanyFeatures = (props) => {
    const [companyFeaturesFormIsOpen, setCompanyFeaturesFormIsOpen] = useState(false);
    const [companyFeaturesFormIsFilled, setCompanyFeaturesFormIsFilled] = useState(false);
    const [companyFeaturesFormIsBeingEdited, setCompanyFeaturesFormIsBeingEdited] = useState(false);

    let [growthHighlights, setGrowthHighlights] = useState(null);
    let [keyAssets, setKeyAssets] = useState(null);
    
    const box_class_name = (companyFeaturesFormIsOpen || companyFeaturesFormIsBeingEdited || companyFeaturesFormIsFilled) ? "public-info" : "public-info__item-box";


    useEffect(() => {
        const fetch = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/startup/company-features/get-growth-opportunities`)
            .then((res) => {
                console.log(res.data);
                setGrowthHighlights(res.data.map(growthHighlight => {
                    return { ...growthHighlight, isChecked: false}
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
                    return { ...keyAsset, isChecked: false}
                }));
            })
            .catch((err) => {
                console.log(err);
            });
        }
        
        fetch();
    }, []);

   


    console.log(growthHighlights, keyAssets);

    return (
        <div className={ box_class_name }> 
            {
                (companyFeaturesFormIsOpen) 
                ? (
                    <CompanyFeaturesNewForm 
                        onClose={ () => setCompanyFeaturesFormIsOpen(false) }
                        onFinish={ () => {
                            setCompanyFeaturesFormIsFilled(true);
                            setCompanyFeaturesFormIsOpen(false);
                        } }
                        startup_id={props?.startup_id}
                        highlights={growthHighlights}
                        assets={keyAssets} 
                    /> 
                ) 
                : (companyFeaturesFormIsFilled)
                ? (
                    <CompanyFeaturesFilledForm
                        onEdit={ () => {
                            setCompanyFeaturesFormIsFilled(false);
                            setCompanyFeaturesFormIsBeingEdited(true);
                        } }
                    />
                )
                : (companyFeaturesFormIsBeingEdited)
                ? (
                    <CompanyFeaturesEditingForm 
                        onClose={ () => {
                            setCompanyFeaturesFormIsBeingEdited(false);
                            setCompanyFeaturesFormIsOpen(false);
                            setCompanyFeaturesFormIsFilled(true);
                        } }
                        onFinish={ () => {
                            setCompanyFeaturesFormIsFilled(true);
                            setCompanyFeaturesFormIsBeingEdited(false);
                        } }
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
