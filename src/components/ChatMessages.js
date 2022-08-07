import React from 'react';

function ChatMessages({message, time}) {
    return(
        <div className="bg-white sm:text-lg sm:w-auto w-1/2 h-auto inline-block rounded-lg relative top-5 float-left clear-left mb-3">
            <div className="ml-2">
                <div className="mr-1 mt-1">
                    <p className="text-sky-600 sm:text-lg text-md ">
                        {message}
                    </p>
                </div>
                <div className="w-full h-1/4 text-xs align-bottom sm:pb-1 mt-4">
                    <p className="font-bold float-right justify-center mr-2">
                        {time}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChatMessages
