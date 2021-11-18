import React, { useState } from 'react'
import './signUp.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router'
import { ReactComponent as Linkedin } from '../../assets/icons/whiteLinkedin.svg';



function SignUp(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('startup')
    const history = useHistory()


    function handleSubmit(e){
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
            .then(res => history.push('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className='signup'>
            <div className='signup__content wrapper'>
                <h1 className='signup__title'>Sign up on Techraise now</h1>
                <p className='signup__subtitle'>Account type</p>
                <div className='signup__buttons'>
                    <button className={role === 'startup' ? 'signup__button' : 'signup__button signup__button--active'}>I want to sell a startup</button>
                    <button className={role === 'startup' ? 'signup__button' : 'signup__button signup__button--active'}>I want to buy a startup</button>
                </div>
            </div>
            <div className='signup__block wrapper'>
                <form onSubmit={handleSubmit} className='signup__form'>
                    <label className='signup__label'>
                        <span>Personal emall</span>
                        <input  className='signup__input' name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) }/>
                    </label>

                    <label className='signup__label'>
                        <span>Passwoard</span>
                        <input  className='signup__input' name='password' type='password' value={password} 
                                onChange={e => setPassword(e.target.value)} placeholder='password'/> 
                    </label> 
                    {/* <p className='signup__forgot'>Forgot your password? Restore</p> */}
                    <button className='signup__btn'>signup</button>
                </form>
            </div>
            <p className='signup__signUp'>Already have an account?<Link to='login'  className='login__signUp-link'> Log in </Link></p>
        </div>
    )
}

export default SignUp