import React, { useState } from 'react'
import './login.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router'
import { ReactComponent as Linkedin } from '../../assets/icons/whiteLinkedin.svg';
// import jwt_decode from "jwt-decode"



function Login(){

    const history = useHistory()
    let [error, setError] = useState('')
    let [inputs, setInputs] = useState([
            {
                isTuched: false,
                isValid: false,
                value: "",
                validation: {
                    required: true,
                    email: true
                }
            },
            {
                isTuched: false,
                isValid: false,
                value: "",
                validation: {
                    required: true,

                }
            },

        ],
    )


    
    let inputValue = (value, id) => {
        setError('')
        const inpts = inputs
        const input = inpts[id]
        input.value = value
        input.isTuched = true
        Object.keys(input.validation).map((elm, index) => {
            if (elm === "required") {
                input.isValid = !(value === "" || value == null);
            } else if (elm === "email") {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                input.isValid = re.test(value);
            }
        })
        setInputs(inpts)
    }


    let createAccount = (e) => {
        e.preventDefault()
        let email = inputs[0].value
        let password = inputs[1].value
        if (email && password) {
            if (inputs[0].isValid) {
                if (password.length >= 8) {
                    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
                    .then(res => {
                        window.localStorage.setItem('token', res.data.token);
                        history.push('/')
                    }).catch(err => {
                        console.log(err.response, err)
                        if (err) {
                            setError("Login or Password do not match")
                        }
                    })
                } else {
                    setError("Password length at least must be 8")
                }
            } else {
                setError("Incorrect email")
            }
        } else {
            setError("All fields are required")
        }
    }

    return(
        <div className='login'>
            <h1 className='login__title'>Welcome back</h1>
            <div className='login__block wrapper'>
                <form onSubmit={createAccount} className='login__form'>
                    {/* <label className='login__label'>
                        <span>Personal emall</span>
                        <input  className='login__input' name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) }/>
                    </label>
                    <label className='login__label'>
                        <span>Passwoard</span>
                        <input  className='login__input' name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password'/>
                    </label> */}

                    <label className='login__label'>
                        <span>Personal emall</span>
                        <input className={error === 'Login or Password do not match' || error === 'Incorrect email' ? 'login__input login__input--error' : 'login__input'}  type='email' placeholder='Email' 
                               onChange={e => inputValue(e.target.value, 0)}/>
                    </label>
                    <p className='errorMessage'>{error === 'Login or Password do not match' || error === 'Incorrect email' ? error : ''}</p>

                    <label className='login__label'>
                        <span>Passwoard</span>
                        <input className={error === 'Login or Password do not match' || error === 'Password length at least must be 8' ?'login__input login__input--error' : 'login__input'}  type='password' placeholder='Password'
                               onChange={e => inputValue(e.target.value, 1)}/>
                    </label>
                    <p className='errorMessage'>{error === 'Login or Password do not match' || error === 'Password length at least must be 8' ? error : ''}</p>
                    <p className='login__forgot'>Forgot your password?<Link to='signup'  className='login__signUp-link'> Restore </Link></p>
                    <button className='login__btn'>Login</button>
                    {/* <div className='login__line'>
                        <p className='login__or'>Or</p>
                    </div>
                    <button className='login__Linkedin'><Linkedin/>Log in with Linkedin</button> */}
                </form>
            </div>
            <p className='login__signUp'>Don’t have an account? <Link to='signup'  className='login__signUp-link'> Sign up now!</Link></p>
        </div>
    )
}

export default Login