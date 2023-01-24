// Card component

const Card = () => {
    return (
        <div className="max-w-xl mx-auto bg-white dark:bg-dark-blue rounded-xl shadow-md overflow-hidden mt-20 hover:shadow-lg duration-300">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48 hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="MailChimp on computer." />
                </div>
                <div className="p-8">
                    <h3 className="uppercase tracking-wide text-sm text-blue dark:text-white font-semibold">
                        New Express Feature
                    </h3>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium dark:text-white text-black hover:underline">
                        Sync offline
                    </a>
                    <p className="mt-2 text-gray dark:text-white">
                        For this we add lots of filler text to make it look like we have lots of cool information here. Keep reading to find out more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;