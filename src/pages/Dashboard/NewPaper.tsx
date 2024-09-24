import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import AccordionUsage from "../../component/Accordion";
import { IoIosAdd } from "react-icons/io";
import Xbutton from "../../component/Xbutton";

interface PaperInfo {
    id: string;
    title: string;
    major: string;
    field: string;
    topic: string;
}

export default function NewPaper({
    setItemSelected
}: {
    setItemSelected: (item: string) => void
}) {
    const navigate = useNavigate();
    const [ paperList, setPaperList ] = useState<PaperInfo[]>([])
    const tokenString = localStorage.getItem('authToken');
    const token = tokenString ? JSON.parse(tokenString) : null;
    const accessToken = token.access_token

    const handleChatbotNavigation = () => {
        setItemSelected("chatbot");
        navigate('/dashboard', { state: { source: 'newpaper' } });
    };
    
    const fetchMessages = async () => {
        await axios
            .get(`${config.apiUrl}/article/get-article?token=${accessToken}`, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
                console.log(response)
                setPaperList(response.data.article_infos)
            })
            .catch((e: any) => {
                console.log(e)
            });
    };

    useEffect(() => {
        fetchMessages();
      }, []);

    return (
        <div style={{padding: '1rem'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>我的论文</h1>
                {paperList.length > 0 ? 
                <Xbutton onClick={handleChatbotNavigation} width="10rem" text="创建新论文" startIcon={<IoIosAdd/>} outlined={true} />
                :
                null
                }
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            {paperList.length == 0 ?
            <Xbutton onClick={handleChatbotNavigation} width="20rem" text="创建新论文" startIcon={<IoIosAdd/>} outlined={true} />
            : null
            }
            </div>
            {paperList.map((paper) => (
                <AccordionUsage id={paper.id} title={paper.title} details={paper}/>
            ))}
        </div>
    )
}