import React , {useState} from 'react'
import './signUpInvestor.scss'


function SignUpStartup() {

    const [file, setFile] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [linkedinLink, setLinkedinLink] = useState('')
    const [text, setText] = useState('')
    // const [website, setWebsite] = useState('')


    function handleSubmit(e){
        e.preventDefault()

        // axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{email,password})
        //     .then(res => history.push('/signUpStartup'))
        //     .catch(err => console.log(err))
    }

    return(
        <div className='signup-investor'>
            <div className='signup-investor__container wrapper'>
                {/* <h1 className='signup-investor__title'>Welcome to Techraise! Crate your investor profile!</h1> */}
                <form className='signup-investor__form' onSubmit={handleSubmit}>
                    <h2 className='signup-investor__form-title'>Contact info</h2>
                    <h3 className='signup-investor__form-subtitle'>This information will be visible to sellers</h3>
                    <label>
                        {/* <span>First name </span> */}
                        <input name='contactName' className='add-File' type='file' 
                                onChange={e => setFile(e.target.value)} /> 
                    </label> 
                    <p className='signup-investor__form-text'>All fields are required</p>
                    <div className='signup-investor__form-box'>
                        <label className='signup__label'>
                            <span>First name </span>
                            <input  className='signup__input' name='contactName' type='text' value={firstName} 
                                    onChange={e => setFirstName(e.target.value)} /> 
                        </label> 
                        <label className='signup__label'>
                            <span>Last name </span>
                            <input  className='signup__input' name='startupName' type='text' value={lastName} 
                                onChange={e => setLastName(e.target.value)} /> 
                        </label> 
                    </div>
                    <label className='signup__label'>
                        <span>Contact Email </span>
                        <input  className='signup__input' name='contactEmail' type='email' value={contactEmail} 
                                onChange={e => setContactEmail(e.target.value)} /> 
                    </label> 
                    <label className='signup__label'>
                        <span>Linkedin link</span>
                        <input  className='signup__input' name='linkedin Link' type='text' value={linkedinLink} 
                                onChange={e => setLinkedinLink(e.target.value)} /> 
                    </label> 
                    <label className='signup__label'>
                        <span>Shortbio (max 500 characters)</span>
                        <textarea  className='signup__textarea' name='Shortbio' type='text' value={text} 
                                onChange={e => setText(e.target.value)} /> 
                    </label> 
                    <button className='signup__btn'>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpStartup