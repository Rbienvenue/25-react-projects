import { useEffect, useState } from "react"

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        var currentValue;
        try {
            const item = localStorage.getItem(key)
            currentValue = item === null ? defaultValue : item
        } catch (error) {
            console.error(error)
            currentValue = defaultValue
        }
        return currentValue
    })

    useEffect(() => {
      try{
          localStorage.setItem(key, value)
      } catch (error) {
          console.error(error)
      }
    }, [value, setValue])

    return [value, setValue]
}