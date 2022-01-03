import React, { useState, useEffect } from 'react';
import { my_startup_icons } from '../../../dummy_datas/Icons';
import axios from 'axios';
import './MyStartupDropdown.scss';


function MyStartupDropdown({ dropdownOptions, dropdownClassName, onPass, selected }) {
    const [dropdownIsShown, setDropdownIsShown] = useState(false);
    const [startups, setStartups] = useState();

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/startup/basic-info/startup-types`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setStartups(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [dropdownIsShown]);

    const chooseOptionHandler = (option) => {
        onPass(option);
        setDropdownIsShown(false);
    };

    console.log(selected);
    
    
    return (
        <div className={ `my-startup-dropdown__div ${ dropdownClassName }` }>
            <div 
                className={ `my-startup-dropdown__show-dropdown ${ (dropdownIsShown) && "rotate-icon" }` }
                onClick={ () => setDropdownIsShown((prevState) => !prevState) }
            >
                <p className="my-startup-dropdown__selected"> { selected } </p>
                <img src={ my_startup_icons.down_arrow_icon } alt={ dropdownIsShown ? "up-arrow" : "down arrow" } />
            </div>
            {
                (dropdownIsShown) && (
                    <div className="my-startup-dropdown__dropdown">
                        {
                            dropdownOptions.map((option, index) => {
                                return (
                                    <div 
                                        key={ index }
                                        className="my-startup-dropdown__options"
                                        onClick={ () => chooseOptionHandler(option) }
                                    >
                                        <p className="my-startup-dropdown__option-title">
                                            {typeof option === 'object' ? option.name : option }
                                        </p>
                                    </div> 
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default MyStartupDropdown;
