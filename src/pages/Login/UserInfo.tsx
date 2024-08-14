// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../../assets/logo.png';
// import './connection.scss';
// import Xbutton from "../../component/Xbutton"
// import { ToastContainer, toast } from 'react-toastify';
// import config from '../../config';
// import JobList from '../../assets/json/job.json';
// import SexList from '../../assets/json/sex.json';
// import SourceList from '../../assets/json/source.json';
// import DropDown from '../../component/DropDown';
// import InputField from '../../component/InputField';
// import qs from 'qs'

// export default function UserInfo() {
//     const location = useLocation();
//     const { token } = location.state || {};
//     const [username, setUsername] = useState<string>("")
//     const [sex, setSex] = useState<string>("")
//     const [job, setJob] = useState<string>("")
//     const [source, setSource] = useState<string>("")
//     const [reason, setReason] = useState<string>("")
    
//     const userinfoSubmit = async() => {
//         if (!token) {
//             toast.error("用户不明，请重新登录");
//         } else if (!username || !sex || !job || !source || !reason) {
//             toast.error("请检查是否所有项都已填写");
//         } else {
//             await axios
//                 .post(`${config.apiUrl}/userinfo?user_info_id=${token}`,
//                     qs.stringify({
//                         user_info_name: username,
//                         user_info_gender: sex,
//                         user_info_goal: reason,
//                         user_info_registration_source: source,
//                         user_info_status: job
//                     }),
//                     {
//                         headers: {
//                             'Content-Type': 'application/x-www-form-urlencoded',
//                             'Accept': 'application/json'
//                         }
//                     }
//                 )
//                 .then(() => {
//                     toast.success('正在登录');
//                 })
//                 .catch((e: any) => {
//                     toast.error(String(e));
//                 });
//         }
//     }

//     return (
//         <div className='middle_horizontal linear_bg'>
//             <div className='middle_vertical'>
//                 <div className='connection_title'>
//                     <img src={logo} alt="logo" className="middle_logo" />
//                     <h3>{import.meta.env.VITE_REACT_APP_WELCOME_MESSAGE}</h3>
//                     <InputField width='25rem' type='text' onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => {setUsername(e.target.value)}} label="昵称" />
//                     <DropDown label="性别" items={SexList.sex.flat()} width="25rem" helper_text="" onChange={(val) => setSex(val)} />
//                     <DropDown label="职业" items={JobList.jobs.flat()} width="25rem" helper_text="您从事的职业是？" onChange={(val) => setJob(val)} />
//                     <DropDown label="渠道" items={SourceList.sources.flat()} width="25rem" helper_text="您是从哪里了解到我们的？" onChange={(val) => setSource(val)} />
//                     <DropDown label="原因" items={JobList.jobs.flat()} width="25rem" helper_text="您为什么选择我们？" onChange={(val) => setReason(val)} />
//                     <Xbutton text="提交" outlined={false} width="25rem" onClick={userinfoSubmit} startIcon={<></>} />
//                 </div>
//                 <ToastContainer />
//             </div>
//         </div>
//     )
// }