// Button component

const Button = ({ color, children }) => {
    return (
        <button className={`px-4 w-full py-2 text-white rounded-md bg-` + color}>
            {children}
        </button>
    )
}

export default Button;