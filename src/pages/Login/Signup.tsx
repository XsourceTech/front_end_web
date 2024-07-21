import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import DividerOr from '../../component/DividerOr';

import  * as FcIcons from "react-icons/fc";
import './connection.scss';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';

const EmailRegex = /^\s?[A-Z0-9]+[A-Z0-9._+-]{0,}@[A-Z0-9._+-]+\.[A-Z0-9]{2,4}\s?$/i;


export default function Login() {
    const navigate = useNavigate();
    const [emailSign, setEmailSign] = useState(false)
    const [email, setEmail] = useState('')

    const emailSignup = (text_value: string) => {
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
                {
                    !emailSign &&
                    <>
                        <Xbutton width="25rem" text="Sign up with Google" startIcon={<FcIcons.FcGoogle />} outlined={true} onClick={() => {}} />
                        <DividerOr />
                    </>
                }

                <InputField width='25rem' type='text' onChange={(e) => {emailSignup(e.target.value)}} label="Email" />
                {emailSign && <InputField label="Password" type="password" width='25rem' onChange={() => {}}/>}
                {emailSign && <InputField label="Username" type="text" width='25rem' onChange={() => {}}/>}

                <Xbutton text="Continue" outlined={false} width="25rem" onClick={loginSubmit} startIcon={<></>} />
                {
                    !emailSign &&
                    <Xbutton width="25rem" text='Already have account. Log in here' startIcon={<></>} outlined={true} onClick={() => {{navigate('/login')}}} />
                }
                <ToastContainer />
            </div>
        </div>
    );
}
