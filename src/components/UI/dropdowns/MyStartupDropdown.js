import React, { useState } from 'react';
import { my_startup_icons } from '../../../dummy_datas/Icons';
import './MyStartupDropdown.css';


function MyStartupDropdown({ dropdownOptions, dropdownClassName }) {
    const [dropdownIsShown, setDropdownIsShown] = useState(false);
    const [defaultOption] = dropdownOptions;
    const [selected, setSelected] = useState(defaultOption);

    const chooseOptionHandler = (option) => {
        setSelected(option);
        setDropdownIsShown(false);
    };
    
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
                                            { option }
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
