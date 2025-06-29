import MenuItem from "./menuItem";
import './style.css'

export default function MenuList({ list = [] }) {
    return (
        <div className="menu-list">
            <ul>
                {
                    list.map((listItem, index)=> (
                        <MenuItem key={index} item={listItem} />
                    ))
                }
            </ul>
        </div>
    )
}