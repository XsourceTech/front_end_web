import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.png';
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import { ToastContainer, toast } from 'react-toastify';
import config from '../../config';

export default function Activate() {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>('');

    const activateSubmit = async() => {
        console.log(`${config.apiUrl}/verify?signed_email=${token}`)
        await axios
            .get(`${config.apiUrl}/verify`,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
                }
            )
            .then(() => {
                toast.success('Loging in...');
                navigate("/userinfo", { state: { token } })
            })
            .catch((e: any) => {
                toast.error(String(e));
                navigate("/userinfo", { state: { token } })
            });
    }

    useEffect(() => {
        // Get the pathname
        const pathname = window.location.pathname;
        setToken(pathname.split('/')[2])
    
        // Extract the token from the pathname
        // Assuming the token is always after "/verify/"
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
                <Xbutton width="25rem" text="验证邮箱" startIcon={<></>} outlined={true} onClick={() => {activateSubmit()}} />
                <ToastContainer />
            </div>
        </div>
    );
}
