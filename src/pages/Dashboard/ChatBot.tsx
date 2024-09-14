import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './chatbot.scss'
import { MessageLeft, MessageRight } from '../../component/Chat/MessageLeftRight';
import ChatInput from '../../component/Chat/ChatInput';
import Xbutton from '../../component/Xbutton';
import axios from 'axios';
import config from '../../config';

interface Message {
    content: string;
    role: string;
}

interface TokenType {
    access_token: string;
    token_type: string
}

export default function ChatBotChatBot({ source }: { source?: string }) {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [ summary, setSummary ] = useState<boolean>(false);
    const [ currentInput, setCurrentInput ] = useState<string>("");
    const [messages, setMessages] = useState<{ chat_message: Message[] }>({ chat_message: [] });
    const messageEndRef = useRef<HTMLDivElement | null>(null);

    const clientAnswer = async () => {
        const tmpMessage = {
            "content": currentInput,
            "role": "user"
        }
        setMessages((prevMessages) => ({
            chat_message: [...prevMessages.chat_message, tmpMessage],
        }));
        await axios
            .get(`${config.apiUrl}/get-response?bot_memory=${messages}part=article&token=${token}`)
            .then((response) => {
                console.log(response)
                const chat_messages = response.data.bot_memory.chat_messages
                const botRes = chat_messages[chat_messages.length - 1]
                setMessages((prevMessages) => ({
                    chat_message: [...prevMessages.chat_message, botRes],
                }));
                if (response.data.bot_memory.is_end) {
                    setSummary(true)
                }
            })
            .catch((e: any) => {
               console.log(String(e));
            });
        // const automaticMessage = {
        //     "content": "Message from Ai for text",
        //     "role": "assistant"
        // }
        // setMessages((prevMessages) => ({
        //     chat_message: [...prevMessages.chat_message, automaticMessage],
        // }));
    }

    const summarizeInfo = async () => {
        await axios
            .post(`${config.apiUrl}/summarize`, {
                bot_memory: messages,
                token: token,
                part: "article"
            })
            .then((response) => {
                console.log(response)
                navigate("/dashboard")
            })
            .catch((e: any) => {
                console.log(String(e));
            });
    }

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div style={{padding: '1rem'}}>
            <h1>XSource AI</h1>
            <Paper className="paper" elevation={0}>
                <Paper className="messageBody" elevation={0}>
                    {
                        messages.chat_message.map((msg) => {
                            if (msg.role === 'assistant') {
                                return (
                                  <MessageLeft
                                    message={msg.content}
                                  />
                                );
                            } else {
                                return (
                                  <MessageRight
                                    message={msg.content}
                                  />
                                );
                            }
                        })
                    }
                    <div ref={messageEndRef} />
                </Paper>
                {
                    summary ? (
                        <Xbutton onClick={summarizeInfo} width='10rem' text="Submit" startIcon={<></>} outlined={false} />
                    ) : (
                        <ChatInput onChange={(e) => {setCurrentInput(e.target.value)}} onSendClick={clientAnswer}/>
                    )
                }
            </Paper>
        </div>
    )
}