import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.svg';
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config';

export default function Activate() {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>('');

    const activateSubmit = async() => {
        await axios
            .get(`${config.apiUrl}/user/activate?token=${token}`,
                {
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            )
            .then(() => {
                toast.success('Logging in...');
                navigate("/login", { state: { token } })
            })
            .catch((e: any) => {
                toast.error(String(e));
                navigate("/login", { state: { token } })
            });
    }

    useEffect(() => {
        // Get the pathname
        const pathname = window.location.pathname;
        setToken(pathname.split('/')[2])
        const tokenMatch = pathname.match(/\/verify\/(.+)/);
    
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
                <h1>点击按钮  完成注册流程</h1>
                <Xbutton width="25rem" text="验证邮箱" startIcon={<></>} outlined={true} onClick={activateSubmit} />
                <Xbutton text="重置" outlined={false} width="25rem" onClick={activateSubmit} startIcon={<></>} />

                <ToastContainer />
            </div>
        </div>
    );
}
