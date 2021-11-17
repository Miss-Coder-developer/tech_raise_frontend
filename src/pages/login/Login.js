import React, { useState } from 'react'
import './login.scss'
import axios from 'axios'
import {useHistory} from 'react-router'


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    function handleSubmit(e){
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
            .then(res => history.push('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className='login'>
            <h1 className='login__title'>Login</h1>
            <div className='login__block wrapper'>
                <form onSubmit={handleSubmit} className='login__form'>
                    <input  className='login__input' name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value) }/>
                    <input  className='login__input' name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password'/>
                    <button className='login__btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login