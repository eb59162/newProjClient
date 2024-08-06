import { Socket } from 'socket.io-client';
import styles from './styles.module.css';
import React, { useState } from 'react';
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import DraftsIcon from '@mui/icons-material/Drafts';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const SendMessage = ({ socket, username, room }) => {

    const [message, setMessage] = useState(' ');

    const handleSendMessage = async () => {
        console.log("send message");
        const __createdtime__ = Date.now();
        socket.emit('send_message', { username, room, message, __createdtime__ });
        setMessage('');

    };

    return (
        <>
            <div className={styles.SendMessageContainer}>
                <Paper sx={{ width: 230 }}>
                    <MenuList>
                        <MenuItem>
                            <input
                                autoFocus
                                margin="dense"
                                id="name"
                                type="text"
                                fullWidth
                                variant="inherit"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Type message' input />
                            
                        </MenuItem>
                    </MenuList>
                </Paper>
                <button className='btn btn-primary' onClick={handleSendMessage}>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                </button>
            </div>
        </>
    );
};

export default SendMessage;