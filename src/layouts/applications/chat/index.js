import React, { useState, useRef, useEffect } from 'react';

import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import './ChatUI.css';

function ChatUI({className}) {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    const handleMessageChange = (e) => {
        setCurrentMessage(e.target.value);
    }

    const handleSendMessage = (e) => {
        e.preventDefault(); 
        setMessages((prevMessages) => [...prevMessages, currentMessage]);
        setCurrentMessage('');
    }

    return (
        <Card>
            <div className="chat-container">
                <MDBox className="chat-header" sx={{borderBottom:'1px solid #000' , textAlign:'center' , fontWeight:'bold'}} p={1} >
                    {className}
                </MDBox>
                <MDBox p={1} sx={{ overflowY: 'auto' ,flexGlow:1 ,height:'600px'} } > 
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            {message}
                        </div>
                    ))}
                </MDBox>
                <form onSubmit={handleSendMessage}>
                    <MDBox p={1} display="flex" justifyContent="space-between" alignItems="center" >
                        <MDBox flex="1 1 auto" flexBasis="80%" mr={1}>
                            <MDInput
                                type="text"
                                value={currentMessage}
                                onChange={handleMessageChange}
                                fullWidth
                            />
                        </MDBox>
                        <MDBox flex="1 1 auto" flexBasis="20%">
                            <MDButton variant="contained" fullWidth color="info" type="submit" flexBasis="30%" >
                                送信
                            </MDButton>
                        </MDBox>
                    </MDBox>
                </form>
            </div>
        </Card>
    );
}

export default ChatUI;
