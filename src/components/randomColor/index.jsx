import { useState } from "react"

export default function Random() {
    const [color, setColor] = useState('#00000')
    const [colorType, setColorType] = useState('hex')
    function generateRandomHex() {
        let randomColorValue = '#'
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        for (let i = 0; i < 6; i++) {
            let randomValue = hex[Math.floor(Math.random() * 16)]
            randomColorValue += `${randomValue}`

        }
        return randomColorValue;

    }

    function generateRandomRgb() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const rgbColor = `rgb(${r},${g},${b})`
        return rgbColor

    }
    function handlecolor(getcolor) {
        console.log('i am working');

        if (getcolor === 'hex') {
            console.log(color)
            setColorType('hex')
            setColor(() => generateRandomHex())
        }
        else if (getcolor === 'rgb') {
            setColorType('rgb')
            setColor(() => generateRandomRgb())

        }

    }
    return (
        <div style={{ backgroundColor: color, color: 'white', height: '100vh', width: '100vw', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <button onClick={() => { handlecolor('hex') }}>Create hex</button>
            <button onClick={() => { handlecolor('rgb') }}>Create rgb</button>
            <button onClick={() => { colorType === 'hex' ? handlecolor('hex') : handlecolor('rgb') }}>Generate random color</button>
            <p style={{ fontSize: '6rem', fontWeight: 'bolder' }}>{colorType === 'hex' ? 'HEX color' : 'RGB color'}</p>
            <p style={{ fontSize: '4rem', fontWeight: 'bold' }}>{color}</p>
        </div >
    )
}