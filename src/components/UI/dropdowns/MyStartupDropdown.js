import React, { useState } from 'react';
import { my_startup_icons } from '../../../dummy_datas/Icons';
import './MyStartupDropdown.scss';


function MyStartupDropdown({ dropdownOptions, dropdownClassName, onPass, selected }) {
    const [dropdownIsShown, setDropdownIsShown] = useState(false);

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
                                            { option.name }
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
