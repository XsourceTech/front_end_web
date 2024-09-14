import React, { useState } from 'react'
import SideBar from "../../component/SideBar";
import NewPaper from "./NewPaper";
import UploadFiles from "./UploadFiles";
import ChatBot from "./ChatBot";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const [itemSelected, setItemSelected] = useState("paper")
    const location = useLocation();

    const handleMenuClick = (item: string) => {
        setItemSelected(item);
    };

    return (
        <div style={{display: "flex", flexDirection: 'row', backgroundColor: '#F0F5FC', padding: '1rem 1rem'}}>
            <SideBar onClick={handleMenuClick}/>
            <div style={{
                width: '90%',
                height: 'calc(100vh - 2rem)',
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                border: '1px solid #F2F2F2',
            }}>
                {itemSelected === 'paper' && <NewPaper setItemSelected={setItemSelected} />}
                {itemSelected === 'upload' && <UploadFiles />}
                {itemSelected === 'chatbot' && <ChatBot source={location.state?.source} token={location.state?.token} />}
            </div>
        </div>
    )
}