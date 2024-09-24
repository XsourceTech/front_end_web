import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import './Chat.scss'
import { useProfanityChecker } from 'glin-profanity';

export default function ChatInput({
    onChange,
    onSendClick
}: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSendClick: (string) => void
}) {
    const [inputValue, setInputValue] = useState<string>("");
    const [ alarm, setAlarm ] = useState<boolean>(false);
    const { checkTextAsync } = useProfanityChecker({
        allLanguages: true,
        caseSensitive: true,
        wordBoundaries: true,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event);
    };
    
    const handleSendClick = async() => {
        const res = await checkTextAsync(inputValue)
        if (res.containsProfanity === true) {
            setAlarm(true)
        } else {
            setAlarm(false)
            if (inputValue.trim()) {
                onSendClick(inputValue);
                setInputValue(""); // Reset input
            }
        }

    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === "Enter") {
            handleSendClick();  // Send msg when Enter is pressed
        }
    };

    return (
        <div style={{width: '80%'}}>
            <div style={{position: 'relative', }}>
                <input
                    type="text"
                    className="notitle"
                    placeholder="输入..."
                    onChange={handleInputChange}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
                <IoIosSend 
                    className="sendicon"
                    onClick={handleSendClick}
                />
            </div>
            {alarm && (
                <p style={{color: '#C92519'}}>您的输入包含敏感词，请修改后再尝试</p>
            )}
        </div>
    )
}

