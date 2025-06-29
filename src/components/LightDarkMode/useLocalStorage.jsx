import { useEffect, useState } from "react"

export default function useLocalStorage(key) {
    const [value, setValue] = useState(() => {
        var currentValue;
        try {
            currentValue = localStorage.getItem(key) === null ? 'dark' : localStorage.getItem(key)
        } catch (error) {
            console.error(error)
            currentValue = 'dark'
        }
        return currentValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}