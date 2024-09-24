import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './connection.scss';
import Xbutton from "../../component/Xbutton"

const RedirectSentence: { [key: string]: string } = {
    "already-verified": "您的账户已经激活成功 点击下方登录账号",
    "activation-success": "账号激活成功 点击下方登录账号",
    "password-reset-success": "密码重置成功 点击下方登录账号"
};

export default function Redirect() {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState<string>('already-verified');

    useEffect(() => {
        const pathname = window.location.pathname;
        setRedirect(pathname.split('/')[2])
        const redirectMatch = pathname.match(/\/redirect\/(.+)/);
    
        if (redirectMatch && redirectMatch[1]) {
          setRedirect(redirectMatch[1]);
        }
    }, []);

    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
                </div>
                <h1>{RedirectSentence[redirect] || "未知操作"}</h1>
                <Xbutton width="25rem" text="登录" startIcon={<></>} outlined={true} onClick={() => {navigate('/login')}} />

            </div>
        </div>
    );
}