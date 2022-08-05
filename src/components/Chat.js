import React, { useState } from "react";
import ChatMessages from './ChatMessages';
import ValidationNotification from './validation/validationNotification';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Chat({profileName}) {

    const [view, setView] = useState([]);
    const [constructMessage, setMessage] = useState([{
        message: '',
        time: null,
    }])
    const [validation, setValidate] = useState('');

    let swears = [
        'Pisslo',
        'Dogwater',
        'pisslo',
        'dogwater',
    ];

    const ValidateInput = () => {
        const searchSwear = swears.includes(constructMessage.message);
        searchSwear === true ?
            setValidate('Notify') : GetTimeOfMessage();
    };

    const SendMessage = () => {
        setView(view.concat({constructMessage}));
        document.getElementById('input').value = '';
    };

    const RemoveAlert = () => {
        setValidate('');
    }

    const GetTimeOfMessage = () => {
        const date = new Date();
        setMessage({...constructMessage, time : date.getHours() + ':' + date.getMinutes()});
        SendMessage();
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
                    <TextField multiline id="input" maxRows={1} placeholder="Enter Message.." onChange={e => setMessage({...constructMessage, message : e.target.value})} sx={{
                        width: '100%',
                        padding: '1rem',
                    }}/>
                </div>
            </div>
             <div className="h-4/5 ml-5 overflow-scroll overflow-x-hidden">
                 {view.map(({constructMessage}, key) => {
                     return(
                        <ChatMessages message={constructMessage.message} time={constructMessage.time} key={key}/>
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

