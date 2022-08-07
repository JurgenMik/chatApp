import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function ValidationNotification() {

    return(
        <div className="w-full absolute flex justify-center mt-6 z-20">
            <Alert severity="warning"><AlertTitle>Warning</AlertTitle>
                Message should not contain any <strong>slurs or profanities</strong>
            </Alert>
        </div>
    );
}

export default ValidationNotification;