

function ChatMessages({message}) {
    return(
        <div className="bg-white sm:w-2/4 w-3/4 sm:h-24 h-32 grid grid-cols-1 rounded-lg relative top-5 ml-5 mb-3">
            <div className="ml-2 h-full">
                <div className="w-full h-3/4">
                    <p className="sm:text-sm text-xs mr-1 mt-1 text-sky-600">
                        {message}
                    </p>
                </div>
                <div className="w-full h-1/4 align-bottom sm:pb-1">
                    <p className="font-bold text-xs sm:text-md sm:float-right justify-center mr-2">
                        01.08.2022 00:51
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChatMessages
