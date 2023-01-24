// Button component

const Button = ({ color, children, classNames }) => {
    return (
        <button className={`px-4 w-full py-2 text-white rounded-md bg-` + color + ` ` + classNames}>
            {children}
        </button>
    )
}

export default Button;