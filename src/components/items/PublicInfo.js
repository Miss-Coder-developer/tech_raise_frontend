import React from 'react';
import './PublicInfo.css';
import SmallInfo from './SmallInfo';
import { my_startup_icons } from '../../dummy_datas/Icons';


const PublicInfo = () => {
    const image_1_src = my_startup_icons.group_1_icon;
    const image_2_src = my_startup_icons.group_2_icon;
    const image_3_src = my_startup_icons.group_3_icon;
    const image_4_src = my_startup_icons.group_4_icon;
    const image_5_src = my_startup_icons.group_5_icon;

    return (
        <div className="public-info">
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
                    // onClick={}
                >
                    Edit info
                </button>
            </div>
            <div className="public-info__second-box">
                <h6 className="description__title"> Description </h6>
                <p className="description__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="public-info__third-box">
                <SmallInfo 
                    label={ "Annual recurring revenue" }
                    imgSrc={ image_5_src }
                    info={ "$ 500" }
                />
                <SmallInfo 
                    label={ "Number of customers" }
                    imgSrc={ image_3_src }
                    info={ "All" }
                />
                <SmallInfo 
                    label={ "Date founded" }
                    imgSrc={ image_2_src }
                    info={ "Jan 2021" }
                />
                <SmallInfo 
                    label={ "Startup team size" }
                    imgSrc={ image_4_src }
                    info={ "6" }
                />
            </div>
        </div>
    );
};

export default PublicInfo;
