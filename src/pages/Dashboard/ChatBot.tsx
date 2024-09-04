import React, { useState } from 'react'
import AccordionUsage from "../../component/Accordion";

export default function ChatBotChatBot({ source }: { source?: string }) {
    const [isChatbot, setIsChatBot] = useState<boolean>(false);

    return (
        <div style={{padding: '1rem'}}>
            <h1>信源AI</h1>
        </div>
    )
}