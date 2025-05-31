import { useState } from 'react'
import data from './data'
import './style.css'
export default function Acordian() {
    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multi, setMulti] = useState([])

    function handleSelected(acordionId) {
        setSelected(acordionId === selected ? null : acordionId)
        setMulti([])
    }
    function handleMulti(acordionId) {
        setSelected(null)
        let storeMulti = [...multi]
        const findId = storeMulti.indexOf(acordionId)
        if (findId == -1) {
            storeMulti.push(acordionId)

        } else {
            storeMulti.splice(findId, 1)
        }
        setMulti(storeMulti)

    }
    return (
        <div className='wraper'>
            <div className='acordion'>
                <button onClick={() => enableMulti ? setEnableMulti(false) : setEnableMulti(true)}>Enable Multi</button>
                {data.map((dataItem) => {
                    return (
                        <div onClick={() => enableMulti ? handleMulti(dataItem.id) : handleSelected(dataItem.id)} className='item'>

                            <div className='title'>
                                <h3>{dataItem.question}</h3>
                                {selected === dataItem.id ? <p>{dataItem.answer}</p> : null}
                                {multi.indexOf(dataItem.id) === -1 ? null : <p>{dataItem.answer}</p>}
                                {multi.indexOf(dataItem.id) === -1  ? <span>+</span> : <span>-</span>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}