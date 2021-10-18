import React, { useState } from 'react';
import { my_startup_icons } from '../../../dummy_datas/Icons';
import './MyStartupDropdown.css';


function MyStartupDropdown({ dropdownOptions, dropdownClassName }) {
    const [dropdownIsShown, setDropdownIsShown] = useState(false);
    const [selected, setSelected] = useState("no");

    const chooseOptionHandler = (option) => {
        setSelected(option);
        setDropdownIsShown(false);
    };
    
    return (
        <div className="selling-financial-details__div">
            <div 
                className={ `selling-financial-details__show-dropdown ${ (dropdownIsShown) && "rotate-icon" }` }
                onClick={ () => setDropdownIsShown((prevState) => !prevState) }
            >
                <p className="selling-financial-details__selected"> { selected } </p>
                <img src={ my_startup_icons.down_arrow_icon } alt="down arrow" />
            </div>
            {
                (dropdownIsShown) && (
                    dropdownOptions.map((option, index) => {
                        return (
                            <div 
                                key={ index }
                                className="selling-financial-details__dropdown"
                                onClick={ chooseOptionHandler.bind(null, option) }
                            >
                                <p className="selling-financial-details__option">
                                    { option }
                                </p>
                            </div>
                        );
                    })
                )
            }
        </div>
    );
}

export default MyStartupDropdown;
