import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccordionUsage from "../../component/Accordion";
import Modal from 'react-modal';

export default function NewPaper({
    setItemSelected
}: {
    setItemSelected: (item: string) => void
}) {
    const navigate = useNavigate();

    const details = {
        title: "Black holes",
        major: "Physics",
        research_fields: "Unknown",
        topic: "Unknown"
    }

    const handleChatbotNavigation = () => {
        setItemSelected("chatbot");
        navigate('/dashboard', { state: { source: 'newpaper' } });
    };

    return (
        <div style={{padding: '1rem'}}>
            <h1>我的论文</h1>
            <button onClick={handleChatbotNavigation}>Add new paper</button>
            <AccordionUsage title="Black holes" details={details}/>
        </div>
    )
}