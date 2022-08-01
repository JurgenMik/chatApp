import React, { useState } from "react";
import ChatMessages from './ChatMessages';
import ValidationNotification from './validation/validationNotification';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Chat({profileName, onClick}) {

    const [message, setMessage] = useState('');
    const [view, setView] = useState([]);
    const [validation, setValidate] = useState('');

    const ValidateInput = () => {
        message.length === 0 || message.length > 25 ? setValidate('Notify') : SendMessage();
    };

    const SendMessage = () => {
        setView(view.concat({message}));
        document.getElementById('input').value = '';
    };

    const RemoveAlert = () => {
        setValidate('');
    }

    return(
         <div className="bg-gray-300 w-3/4 h-3/5 mt-16 rounded-lg relative">
             {(() => {
                 switch(validation) {
                     case 'Notify':
                         return <div onClick={RemoveAlert}>
                                    <ValidationNotification/>
                                </div>;
                        default:
                    }
              })()}
             <div className="grid grid-cols-3 w-full h-1/5 absolute bottom-0.5 rounded-b-lg">
                <div className="bg-gray-800 flex items-center justify-center text-white sm:text-xl z-10">
                    <h1>{profileName}</h1>
                </div>
                <div className="bg-white text-white col-span-2 pt-4">
                    <TextField multiline id="input" maxRows={1} placeholder="Enter Message.." onChange={e => setMessage(e.target.value)} sx={{
                        width: '100%',
                        padding: '1rem',
                    }}/>
                </div>
            </div>
             <div className="h-4/5 overflow-scroll overflow-x-hidden">
                 {view.map((val, key) => {
                     return(
                        <ChatMessages key={key} message={val.message}/>
                     )
                 })}
             </div>
             <div className="pt-40 sm:pt-48 sm:float-right">
                 <Button variant="contained" size="medium" onClick={ValidateInput} endIcon={<SendIcon />}>
                     Send
                 </Button>
             </div>
         </div>
    );
}

export default Chat;

