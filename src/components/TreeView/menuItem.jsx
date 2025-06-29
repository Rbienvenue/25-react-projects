import { FaMinus, FaPlus } from "react-icons/fa";
import MenuList from "./menuList";
import { useState } from "react";
import './style.css'

export default function MenuItem({item}) {
    const [currentChildren, setCurrentChildren] = useState({})

    function handleToggleChildren(getLabel){
        setCurrentChildren({
            ...currentChildren,
            [getLabel] : !currentChildren[getLabel]
        })
        
    }
    return (
        <div className="menu-item">
            <li>
                {item.label}
                {
                    item.children && item.children.length > 0 ? <span onClick={()=> handleToggleChildren(item.label)}>{currentChildren[item.label] ? <FaMinus/> : <FaPlus/> }</span> : null
                }
                {
                    item.children && item.children.length > 0 && currentChildren[item.label] && (<MenuList list={item.children} />)
                }
            </li>
        </div>
    )
}