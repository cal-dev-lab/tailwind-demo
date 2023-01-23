// Text size component

const TextSize = () => {
    return (
        <div className="mt-20 flex justify-between items-center text-center">
            <div className="bg-lighter-blue w-full rounded-sm">
                <p className="text-sm">SM</p>
            </div>
            <div className="bg-lighter-blue w-full rounded-sm">
                <p className="text-3xl hover:scale-105 duration-300">
                    UP TO
                </p>
            </div>
            <div className="font-bold bg-lighter-blue w-full rounded-sm">
                <p className="text-9xl hover:text-red duration-300">9XL</p>
            </div>
        </div>
    )
}

export default TextSize;