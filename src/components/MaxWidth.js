// Max width component

const MaxWidth = () => {
  return (
    <div className="w-full mt-20">
        <div className="max-w-sm bg-gray h-12 flex justify-center items-center mx-auto hover:bg-red duration-300">
            <p className="text-white">max-w-sm duration-300</p>
        </div>
        <div className="max-w-md bg-light-blue h-12 flex justify-center items-center mx-auto hover:bg-purple duration-300">
            <p className="text-white">max-w-md duration-300</p>
        </div>
        <div className="max-w-lg bg-purple h-12 flex justify-center items-center mx-auto hover:bg-orange duration-300">
            <p className="text-white">max-w-lg duration-300</p>
        </div>
        <div className="max-w-xl bg-green h-12 flex justify-center items-center mx-auto hover:bg-red duration-300">
            <p className="text-white">max-w-xl duration-300</p>
        </div>
        <div className="max-w-2xl bg-blue h-12 flex justify-center items-center mx-auto hover:bg-light-blue duration-500">
            <p className="text-white">max-w-2xl duration-500</p>
        </div>
        <div className="max-w-3xl bg-red h-12 flex justify-center items-center mx-auto hover:bg-purple duration-100">
            <p className="text-white">max-w-3xl duration-100</p>
        </div>
        <div className="max-w-full bg-orange h-12 flex justify-center items-center mx-auto hover:bg-green duration-300">
            <p className="text-white">max-w-5xl (full-width of container) duration-300</p>
        </div>
    </div>
  )
}

export default MaxWidth;