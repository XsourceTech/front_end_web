import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AccordionUsage from "../../component/Accordion";
import { IoIosAdd } from "react-icons/io";
import Xbutton from "../../component/Xbutton";

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
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>我的论文</h1>
                <Xbutton onClick={handleChatbotNavigation} width="10rem" text="New Paper" startIcon={<IoIosAdd/>} outlined={true} />
            </div>
            <AccordionUsage title="Black holes" details={details}/>
        </div>
    )
}