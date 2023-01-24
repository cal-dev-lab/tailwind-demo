import { useState, useEffect } from "react";

const useDarkMode = () => {
    // Use theme from local storage from user
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        // Store user theme
        localStorage.setItem("theme", theme);
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}

export default useDarkMode;