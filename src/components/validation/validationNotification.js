import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function ValidationNotification() {

    return(
        <div className="w-full absolute flex justify-center mt-6 z-20">
            <Alert severity="info"><AlertTitle>Info</AlertTitle>
                Message should not be <strong>empty</strong> — or contain more than <strong>25 words</strong>
            </Alert>
        </div>
    );
}

export default ValidationNotification;