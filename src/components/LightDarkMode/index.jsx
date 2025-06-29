import useLocalStorage from "./useLocalStorage"

export default function DarkLightMode() {

    const [theme, setTheme] = useLocalStorage('theme')

    function handleToggleTheme() {
        setTheme (theme === 'dark' ? 'light' : 'dark')
    }
    console.log(theme)
    return <div className="theme-container">
        <p>HELLO WORLD!</p>
        <button onClick={handleToggleTheme}>change theme</button>
    </div>
}