import { useState } from 'react';


export const useValidity = (checkValidity, initialValue = "") => {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputIsValid = checkValidity(enteredValue);
    const inputIsInvalid = inputIsTouched && !inputIsValid;

    function changeInputValueHandler (evt) {
        setEnteredValue(evt.target.value);
    }
    function blurInputHandler () {
        setInputIsTouched(true);
    }

    return { enteredValue, inputIsValid, inputIsInvalid, changeInputValueHandler, blurInputHandler };
};
