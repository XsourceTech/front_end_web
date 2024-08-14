import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.png';
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config';

export default function Reset() {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const verifySubmit = async() => {
        await axios
            .post(`${config.apiUrl}/reset?signed_email=${token}&user_info_password=${password}`)
            .then(() => {
                toast.success('Loging in...');
            })
            .catch((e: any) => {
                toast.error(String(e));
            });
    }

    useEffect(() => {
        // Get the pathname
        const pathname = window.location.pathname;
        setToken(pathname.split('/')[2])
    
        // Extract the token from the pathname
        // Assuming the token is always after "/verify/"
        const tokenMatch = pathname.match(/\/reset\/(.+)/);
    
        if (tokenMatch && tokenMatch[1]) {
          setToken(tokenMatch[1]);
        }
      }, []);

    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
                </div>
                <InputField width='25rem' type='text' onChange={(e) => {setEmail(e.target.value)}} label="Email" />
                <InputField label="Password" type="password" width='25rem' onChange={(e) => {setPassword(e.target.value)}} />

                <Xbutton text="Reset your password" outlined={false} width="25rem" onClick={verifySubmit} startIcon={<></>} />

                <ToastContainer />
            </div>
        </div>
    );
}
