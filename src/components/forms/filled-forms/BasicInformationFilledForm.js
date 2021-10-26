import React, { useContext } from 'react';
import './BasicInformationFilledForm.css';
import SmallInfo from '../../items/my-startup-page/SmallInfo';
import { my_startup_icons } from '../../../dummy_datas/Icons';
import { PassingInfoContext } from '../../contexts/passing-info-context';


const image_1_src = my_startup_icons.group_1_icon;
const image_2_src = my_startup_icons.group_2_icon;
const image_3_src = my_startup_icons.group_3_icon;
const image_4_src = my_startup_icons.group_4_icon;
const image_5_src = my_startup_icons.group_5_icon;

const BasicInformationFilledForm = ({ onEdit }) => {
    const myStartupInfoCtx = useContext(PassingInfoContext);
    const {
        // startup_type,
        about_company,
        annual_revenue,
        num_of_customers,
        month,
        year,
        // asking_price,
        team_size
    } = myStartupInfoCtx.basicInfoData;

    return (
        <div className="info-container">
            <div className="public-info__first-box">
                <SmallInfo 
                    className={ "public-info__small-info" }
                    label={ "Asking price" }
                    imgSrc={ image_1_src }
                    info={ "$ 25" } 
                />
                <button
                    type="button"
                    className="private-info__edit-info-butn"
                    onClick={ onEdit }
                >
                    Edit info
                </button>
            </div>
            <div className="public-info__second-box">
                <h6 className="description__title"> Description </h6>
                <p className="description__text"> { about_company } </p>
            </div>
            <div className="public-info__third-box">
                <SmallInfo 
                    label={ "Annual recurring revenue" }
                    imgSrc={ image_5_src }
                    info={ `$ ${ annual_revenue }` }
                />
                <SmallInfo 
                    label={ "Number of customers" }
                    imgSrc={ image_3_src }
                    info={ num_of_customers }
                />
                <SmallInfo 
                    label={ "Date founded" }
                    imgSrc={ image_2_src }
                    info={ `${ month } ${ year }` }
                />
                <SmallInfo 
                    label={ "Startup team size" }
                    imgSrc={ image_4_src }
                    info={ team_size }
                />
            </div>
        </div>
    );
};

export default BasicInformationFilledForm;
