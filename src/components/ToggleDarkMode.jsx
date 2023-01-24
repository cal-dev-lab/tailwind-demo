// Toggle dark mode component
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkMode = () => {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className="w-full flex items-center justify-center mt-10">
            <span className="text-center bg-lighter-blue dark:bg-blue px-8 py-2 rounded-md cursor-pointer dark:text-white" onClick={() => setTheme(colorTheme)}>
                {
                    colorTheme === "light" ? (
                        'TURN THE LIGHTS: ON'
                    ) : (
                        'TURN THE LIGHTS: OFF'
                    )
                }
            </span>
        </div>
    )
}

export default ToggleDarkMode;