import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
// import  * as FcIcons from "react-icons/fc";
import config from '../../config';
import './connection.scss';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import JobList from '../../assets/json/job.json';
import SourceList from '../../assets/json/source.json';
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
        } else if (!validatePassword(password) || password.length < 6) {
            toast.error("密码应至少有6个字符, 含有1个大写字母, 1个小写字母, 1个特殊字符!");
        } else if (!username) {
            toast.error("请输入用户名");
        } else if (!source || !useridentity) {
            toast.error("请填写所有信息")
        } else {
            try {
                const response = await axios.post(`${config.apiUrl}/user/signup`, {
                    email: email,
                    user_name: username,
                    password: password,
                    source: source,
                    user_identity: useridentity
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                toast.success('正在注册，请注意查看邮箱');
                setTimeout(() => {
                    navigate('/login'); // Replace '/other-page' with your desired route
                }, 3000);
            } catch (e: any) {
                if (e.response) {
                    if (e.response.data?.detail) {
                        toast.error(String(e.response.data.detail));
                    } else {
                        toast.error("未知错误，请稍后再试");
                    }
                } else if (e.request) {
                    toast.error("无法连接到服务器，请检查您的网络连接");
                } else {
                    toast.error("请求失败，请稍后再试");
                }
            }
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
                <DropDown label="职业(必填)" items={JobList.jobs.flat()} width="25rem" helper_text="" onChange={(val) => setUserIdenity(val)} />
                <DropDown label="从什么渠道了解到XSource(必填)" items={SourceList.sources.flat()} width="25rem" helper_text="" onChange={(val) => setSource(val)} />

                <InputField width='25rem' type='text' onChange={(e) => {setEmail(e.target.value)}} label="邮箱" />
                <InputField label="密码" type="password" width='25rem' onChange={(e) => {setPassword(e.target.value)}}/>

                <Xbutton text="注册" outlined={false} width="25rem" onClick={signupSubmit} startIcon={<></>} />
                <Xbutton width="25rem" text='已有账号，点击此处登录' startIcon={<></>} outlined={true} onClick={() => {{navigate('/login')}}} />
                <ToastContainer />
            </div>
        </div>
    );
}
