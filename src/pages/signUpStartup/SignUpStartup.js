import React , {useEffect, useState} from 'react'
import './signUpStartup.scss'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


function SignUpStartup() {

    const [contactName, setContactName] = useState('')
    const [startupName, setStartupName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [website, setWebsite] = useState('')
    const location = useLocation()

    useEffect(() => {
        let b;
        if(location.role) {
            b = location.role
            console.log(b)
        }else {
            return
        }
    },[])

    console.log(location);
    


    function hi(e){
        e.preventDefault()
        console.log(true);
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{contactName,startupName,contactEmail,website})
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }

    return(
        <div className='signup-startup'>
            <div className='signup-startup__container wrapper'>
                <h1 className='signup-startup__title'>Welcome to Techraise! Crate your startup profile!</h1>
                <form className='signup-startup__form'>
                    <h2 className='signup-startup__form-title'>Public information</h2>
                    <h3 className='signup-startup__form-subtitle'>Buyers will see this after you give access</h3>

                    <label className='signup__label'>
                        <span>Contact name </span>
                        <input  className='signup__input' name='contactName' type='text' value={contactName} 
                                onChange={e => setContactName(e.target.value)} /> 
                    </label> 
                    <label className='signup__label'>
                        <span>Startup name </span>
                        <input  className='signup__input' name='startupName' type='text' value={startupName} 
                                onChange={e => setStartupName(e.target.value)} /> 
                    </label> 
                    <label className='signup__label'>
                        <span>Contact Email </span>
                        <input  className='signup__input' name='contactEmail' type='email' value={contactEmail} 
                                onChange={e => setContactEmail(e.target.value)} /> 
                    </label> 
                    <label className='signup__label'>
                        <span>Website </span>
                        <input  className='signup__input' name='website' type='text' value={website} 
                                onChange={e => setWebsite(e.target.value)} /> 
                    </label> 
                    <button className='signup__btn' type="submit" onClick={hi}>Crate startup</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpStartup