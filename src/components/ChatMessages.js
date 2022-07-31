

function ChatMessages() {
    return(
        <div className="bg-white sm:w-2/4 w-3/4 sm:h-28 h-32 grid grid-cols-1 rounded-lg relative top-5 ml-5 ">
            <div className="ml-2 h-full">
                <div className="w-full h-3/4">
                    <p className="sm:text-sm text-xs mr-1 mt-1">Ut enim ad minima veniam,
                        nostrum exercitationem ullam corporis suscipit laboriosam,
                    </p>
                </div>
                <div className="w-full h-1/4 align-bottom sm:mt-1">
                    <p className="text-sky-700 font-bold text-xs sm:text-md float-right mr-2">01.08.2022 00:51</p>
                </div>
            </div>
        </div>
    )
}

export default ChatMessages
