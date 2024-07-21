import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import  * as FcIcons from "react-icons/fc";
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import DividerOr from '../../component/DividerOr';
import { ToastContainer, toast } from 'react-toastify';

const EmailRegex = /^\s?[A-Z0-9]+[A-Z0-9._+-]{0,}@[A-Z0-9._+-]+\.[A-Z0-9]{2,4}\s?$/i;

export default function Login() {
    const navigate = useNavigate();
    const [emailSign, setEmailSign] = useState(false)
    const [email, setEmail] = useState('')

    const emailSignup = (text_value: string) => {
        console.log(email)
        console.log(email.length)
        setEmail(text_value);
    
        if (email.length > 2) {
            setEmailSign(true)
        } else {
            setEmailSign(false)
        }
    }

    const loginSubmit = () => {
        if (!EmailRegex.test(email)) {
            toast.warn("Email format is not valid !");
        }
    }

    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
                </div>
                <Xbutton width="25rem" text="Log in with Google" startIcon={<FcIcons.FcGoogle />} outlined={true} onClick={() => {}} />
                <DividerOr />
                <InputField width='25rem' type='text' onChange={(e) => {emailSignup(e.target.value)}} label="Email" />
                {emailSign && <InputField label="Password" type="password" width='25rem' onChange={() => {}}/>}

                <Xbutton text="Log in" outlined={false} width="25rem" onClick={loginSubmit} startIcon={<></>} />
                <Xbutton width="25rem" text='First time here. Create an account' startIcon={<></>} outlined={true} onClick={() => {navigate('/signup')}} />
                
                <p style={{color: '#828282'}}>Forgot your password ? <Link to="/forgot-password" style={{fontWeight: 'bold', color: '#0077cc'}}>Click here</Link> </p>
                <ToastContainer />
            </div>
        </div>
    );
}
