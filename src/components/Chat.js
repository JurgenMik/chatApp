import ChatMessages from './ChatMessages'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'

function Chat({profileName}){

    return(
         <div className="bg-gray-300 w-3/4 h-3/5 mt-16 rounded-lg relative">
             <div className="grid grid-cols-3 w-full h-20 absolute bottom-0.5 rounded-b-lg">
                <div className="bg-gray-800 flex items-center justify-center text-white sm:text-xl">
                    <h1>{profileName}</h1>
                </div>
                <div className="bg-white text-white col-span-2">
                    <TextField multiline maxRows={1} placeholder="Enter Message.." sx={{
                        width: '100%',
                        padding: '1rem',
                    }}/>
                </div>
            </div>
             <div className="h-4/5">
                 <ChatMessages/>
             </div>
             <div className="pt-40 xl:pt-44 sm:float-right">
                 <Button variant="contained" size="large" endIcon={<SendIcon />}>
                     Send
                 </Button>
             </div>
         </div>
    );
}

export default Chat;

