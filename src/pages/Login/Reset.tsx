import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.svg';
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config';

export default function Reset() {
    const [token, setToken] = useState<string>('');
    const [password, setPassword] = useState<string>('')

    const validatePassword = (password: string): boolean => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
        return hasUppercase && hasLowercase && hasSpecialChar;
    };


    const verifySubmit = async() => {
        console.log(token)
        console.log(password)
        if (!validatePassword(password) || password.length < 6) {
            toast.error("密码应至少有6个字符，含有1个大写字母, 1个小写字母, 1个特殊字符!");
        } else {
            await axios
                .post(`${config.apiUrl}/user/password-reset`, {
                    token: token,
                    new_password: password
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
                })
                .then(() => {
                    toast.success('Logging in...');
                })
                .catch((e: any) => {
                    toast.error(String(e.response.data.detail));
                });
        }
    }

    useEffect(() => {
        // Get the pathname
        const pathname = window.location.pathname;
        setToken(pathname.split('/')[2])

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
                <InputField label="Password" type="password" width='25rem' onChange={(e) => {setPassword(e.target.value)}} />

                <Xbutton text="Reset your password" outlined={false} width="25rem" onClick={verifySubmit} startIcon={<></>} />

                <ToastContainer />
            </div>
        </div>
    );
}
