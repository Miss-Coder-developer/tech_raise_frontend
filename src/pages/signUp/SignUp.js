import React, { useState , useRef, useEffect } from 'react'
import './signUp.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router'
import { ReactComponent as Linkedin } from '../../assets/icons/whiteLinkedin.svg';



function SignUp(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('startup')
    const [popup, setPopup] = useState(false)
    const history = useHistory()

    const [number1value , setNumber1value] = useState(true)
    const [number2value , setNumber2value] = useState(true)
    const [number3value , setNumber3value] = useState(true)
    const [number4value , setNumber4value] = useState(true)
    const [number5value , setNumber5value] = useState(true)
    const [number6value , setNumber6value] = useState(true)

    const number1 = useRef()
    const number2 = useRef()
    const number3 = useRef()
    const number4 = useRef()
    const number5 = useRef()
    const number6 = useRef()
    const numberBtn = useRef()

    

    // console.log(number1value)



    console.log(number1value ,' ++++++')

    function focus2 (e)  {
        setNumber1value(e.target.value) 
        number2.current.focus();
    }
    function focus3 (e)  {
        setNumber2value(e.target.value) 
        number3.current.focus();
    }
    function focus4 (e)  {
        setNumber3value(e.target.value) 
        number4.current.focus();
    }
    function focus5 (e)  {
        setNumber4value(e.target.value) 
        number5.current.focus();
    }
    function focus6 (e)  {
        setNumber5value(e.target.value) 
        number6.current.focus();
    }
    function focusBTN (e)  {
        setNumber6value(e.target.value) 
        numberBtn.current.focus();
    }

      
    function ShowPopup() {
        setPopup(popup => !popup)
    }
    function handleSubmit(e){
        e.preventDefault()

        if (role === 'startup') {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
                .then(res => history.push({
                    pathname: '/signUpStartup',
                    state: 'role'
                }))
             
                .catch(err => console.log(err))
        }

        else if (role === 'investor') {
            axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
                .then(res => history.push('/signUpInvestor'))
                .catch(err => console.log(err))
        }
    }

    return(
        <>
        <div className='signup'>
            <div className='signup__content wrapper'>
                <h1 className='signup__title'>Sign up on Techraise now</h1>
                <p className='signup__subtitle'>Account type</p>
                <div className='signup__buttons'>
                    <button onClick={() => setRole(role => 'startup')} className={role === 'startup' ? 'signup__button signup__button--active' : 'signup__button'}>I want to sell a startup</button>
                    <button onClick={() => setRole(role => 'investor')} className={role === 'investor' ? 'signup__button signup__button--active' : 'signup__button'}>I want to buy a startup</button>
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
                    <button className='signup__btn' type='button' onClick={ShowPopup}>signup</button>
                    <section className={popup ? 'code-popup' : 'displayNone'} onClick={ShowPopup}>
                        <div className='code-popup__container' onClick={(e) => { e.stopPropagation();}}>
                            <h1 className='code-popup__title'>Please verify your email </h1>
                            <div className='code-popup__block'>
                                <input className='code-popup__input' type='number' ref={number1} onChange={focus2} value={number1value}/>
                                <input className='code-popup__input' type='number' ref={number2} onChange={focus3} value={number2value}/>
                                <input className='code-popup__input' type='number' ref={number3} onChange={focus4} value={number3value}/>
                                <input className='code-popup__input' type='number' ref={number4} onChange={focus5} value={number4value}/>
                                <input className='code-popup__input' type='number' ref={number5} onChange={focus6} value={number5value}/>
                                <input className='code-popup__input' type='number' ref={number6} onChange={focusBTN} value={number6value}/>
                            </div>
                            <button className='code-popup__btn' ref={numberBtn}>Verify</button>
                        </div>
                    </section>
                </form>
            </div>
            <p className='signup__signUp'>Already have an account?<Link to='login'  className='login__signUp-link'> Log in </Link></p>
        </div>
        </>
    )
}

export default SignUp