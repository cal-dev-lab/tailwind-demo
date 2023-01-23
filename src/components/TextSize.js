// Text size component

const TextSize = () => {
    return (
        <div className="mt-20 flex justify-between items-center text-center">
            <div className="bg-lighter-blue w-full rounded-sm">
                <p className="text-sm">SM</p>
            </div>
            <div className="bg-lighter-blue w-full rounded-sm">
                <p className="text-3xl">
                    UP TO
                </p>
            </div>
            <div className="font-bold bg-lighter-blue w-full rounded-sm">
                <p className="text-9xl">9XL</p>
            </div>
        </div>
    )
}

export default TextSize;