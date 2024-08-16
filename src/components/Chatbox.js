// src/components/Chatbox.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
            const response = await axios.post('http://localhost:5000/api/plant-care', { message: input });
            const botMessage = { sender: 'bot', text: response.data.reply };
            setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching plant care guide:', error);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Box sx={{ height: 400, overflowY: 'scroll', mb: 2 }}>
                {messages.map((msg, index) => (
                    <Typography key={index} align={msg.sender === 'user' ? 'right' : 'left'}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}: </strong>{msg.text}
                    </Typography>
                ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chatbox;
