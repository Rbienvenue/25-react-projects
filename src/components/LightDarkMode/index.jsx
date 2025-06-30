import useLocalStorage from "./useLocalStorage"
import './theme.css'


export default function DarkLightMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme() {
        setTheme (theme === 'dark' ? 'light' : 'dark')
    }
    console.log(theme)
    return <div className={`theme-container ${theme}`}>
        <p>HELLO WORLD!</p>
        <button className={theme} onClick={handleToggleTheme}>change theme</button>
    </div>
}