import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import  * as FcIcons from "react-icons/fc";

import config from '../../config';
import './connection.scss';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import JobList from '../../assets/json/job.json';
import DropDown from '../../component/DropDown';
import axios from 'axios';

const EmailRegex = /^\s?[A-Z0-9]+[A-Z0-9._+-]{0,}@[A-Z0-9._+-]+\.[A-Z0-9]{2,4}\s?$/i;

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [username, setUsername] = useState<string>("")
    const [useridentity, setUserIdenity] = useState<string>("")
    const [source, setSource] = useState<string>("")


    const validatePassword = (password: string): boolean => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
        return hasUppercase && hasLowercase && hasSpecialChar;
    };

    const signupSubmit = async () => {
        if (!EmailRegex.test(email)) {
            toast.error("请检查的邮箱地址是否正确");
        } else if (!validatePassword(password)) {
            toast.error("密码比如至少含有1个大写字母, 1个小写字母, 1个特殊字符!");
        } else if (!username) {
            toast.error("请输入用户名");
        } else {
            await axios
                .post(`${config.apiUrl}/signup?email=${email}&password=${password}&username=${username}&source=${source}&user_identity=${useridentity}`)
                .then(() => {
                    toast.success('正在注册');
                })
                .catch((e: any) => {
                    toast.error(String(e));
                });
        }
    }

    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
                </div>
                {/* <Xbutton width="25rem" text="使用谷歌账号注册" startIcon={<FcIcons.FcGoogle />} outlined={true} onClick={() => {}} /> */}
                {/* <DividerOr /> */}

                <InputField width='25rem' type='text' onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {setUsername(e.target.value)}} label="昵称" />
                <DropDown label="您的身份" items={JobList.jobs.flat()} width="25rem" helper_text="" onChange={(val) => setUserIdenity(val)} />
                <DropDown label="为什么选择信源" items={JobList.jobs.flat()} width="25rem" helper_text="" onChange={(val) => setSource(val)} />

                <InputField width='25rem' type='text' onChange={(e) => {setEmail(e.target.value)}} label="邮箱" />
                <InputField label="密码" type="password" width='25rem' onChange={(e) => {setPassword(e.target.value)}}/>

                <Xbutton text="注册" outlined={false} width="25rem" onClick={signupSubmit} startIcon={<></>} />
                <Xbutton width="25rem" text='已有账号，点击此处登录' startIcon={<></>} outlined={true} onClick={() => {{navigate('/login')}}} />
                <ToastContainer />
            </div>
        </div>
    );
}
