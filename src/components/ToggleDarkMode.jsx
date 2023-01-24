// Toggle dark mode component
import useDarkMode from "../hooks/useDarkMode";

const ToggleDarkMode = () => {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className="w-full flex items-center justify-center mt-10">
            <span className="text-center dark:text-white" onClick={() => setTheme(colorTheme)}>
                {
                    colorTheme === "light" ? (
                        'Dark mode'
                    ) : (
                        'Light mode'
                    )
                }
            </span>
        </div>
    )
}

export default ToggleDarkMode;