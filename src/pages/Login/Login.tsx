import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import  * as FcIcons from "react-icons/fc";
import './connection.scss';
import Xbutton from "../../component/Xbutton"
import InputField from '../../component/InputField';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import config from '../../config';
import Modal from 'react-modal';

const EmailRegex = /^\s?[A-Z0-9]+[A-Z0-9._+-]{0,}@[A-Z0-9._+-]+\.[A-Z0-9]{2,4}\s?$/i;

export default function Login() {
    const navigate = useNavigate();
    const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const loginSubmit = async() => {
        if (!EmailRegex.test(email)) {
            toast.error("请检查的邮箱地址是否正确");
        } else {
            await axios
                .post(`${config.apiUrl}/login`, {
                    email: email,
                    password: password
                })
                .then(() => {
                    toast.success('正在登录');
                })
                .catch((e: any) => {
                    toast.error(String(e));
                });
        }
    }

    const resetSubmit = async() => {
        if (!EmailRegex.test(email)) {
            toast.error("请检查的邮箱地址是否正确");
        } else {
            await axios
                .post(`${config.apiUrl}/password-reset-request`, {
                    email: email
                    },
                    {
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                )
                .then(() => {
                    toast.success('注意查收您的邮件');
                })
                .catch((e: any) => {
                    toast.error(String(e));
                });
        }
    }

    const toggleResetModal = () => {
        setIsResetModalOpen(!isResetModalOpen);
    };

    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
                </div>
                {/* <Xbutton width="25rem" text="使用谷歌账号登录" startIcon={<FcIcons.FcGoogle />} outlined={true} onClick={() => {}} /> */}
                {/* <DividerOr /> */}

              <InputField width='25rem' type='text' onChange={(e) => {setEmail(e.target.value)}} label="邮箱" />
                <InputField label="密码" type="password" width='25rem' onChange={(e) => {setPassword(e.target.value)}} />

                <Xbutton text="登录" outlined={false} width="25rem" onClick={loginSubmit} startIcon={<></>} />
                <Xbutton width="25rem" text='初来乍到。创建新账号' startIcon={<></>} outlined={true} onClick={() => {navigate('/signup')}} />
                
                <div onClick={toggleResetModal} style={{color: '#828282', cursor: 'pointer', fontFamily: 'dong-qing'}}>忘记密码 请点击这里</div>
                <ToastContainer />
            </div>

            <Modal
                isOpen={isResetModalOpen}
                onRequestClose={toggleResetModal}
                contentLabel="忘记密码"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.25)',
                        zIndex: 1000,
                    },
                    content: {
                        width: '30em',
                        height: '20em',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        gap: '1rem'
                    },
                }}
            >
                <h2>重置您的密码</h2>
                <p>请输入您的注册邮箱，重置后请注意查收邮件</p>
                <InputField width='25rem' type='text' onChange={(e) => {setEmail(e.target.value)}} label="邮箱地址" />
                <Xbutton text="重置" outlined={false} width="25rem" onClick={resetSubmit} startIcon={<></>} />
            </Modal>
        </div>
    );
}
