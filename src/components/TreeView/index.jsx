import MenuList from './menuList'
import './style.css'

export default function TreeMenu({ menu = [] }) {

    

    return (
        <div className='menu-container'>
            <MenuList list={menu} />
        </div>
    )
}