// Notification component

const Notification = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative px-4 py-2 bg-light-cyan text-center rounded-t-md flex items-center justify-center text-cyan cursor-wait">
                Client Details
                <span className="animate-bounce p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white shadow-lg shadow-red">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-cyan text-center rounded-t-md flex items-center justify-center text-cyan cursor-pointer">
                Medical History
                <span className="animate-pulse p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white shadow-lg shadow-red">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-cyan text-center rounded-t-md flex items-center justify-center text-cyan cursor-move">
                Client Log
                <span className="animate-ping p-4 ml-3 absolute z-10 -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white shadow-lg shadow-red">
                    12
                </span>
            </div>
            <div className="relative px-4 py-2 bg-light-cyan text-center rounded-t-md flex items-center justify-center text-cyan cursor-not-allowed">
                Client Contact
                <span className="p-4 ml-3 absolute -top-4 -right-3 rounded-full bg-red h-6 w-6 flex justify-center items-center text-white shadow-lg shadow-red">
                    12
                </span>
            </div>
        </div>
    )
}

export default Notification;