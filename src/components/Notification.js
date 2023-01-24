// Notification component

const Notification = () => {
    return (
        <div className="flex justify-center space-x-8">
            <div className="relative px-4 py-2 bg-light-blue w-1/4 text-center rounded-t-md mb-5 flex items-center justify-center text-blue">
                Client Details
                <span className="animate-bounce p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-blue w-1/4 text-center rounded-t-md mb-5 flex items-center justify-center text-blue">
                Medical History
                <span className="animate-pulse p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-blue w-1/4 text-center rounded-t-md mb-5 flex items-center justify-center text-blue">
                Client Log
                <span className="animate-ping p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-blue w-1/4 text-center rounded-t-md mb-5 flex items-center justify-center text-blue">
                Client Contact
                <span className="animate-pulse p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white">
                    12
                </span>
            </div>
        </div>
    )
}

export default Notification;