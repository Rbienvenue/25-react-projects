import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating() {

    const [hoverIndex, setHoverIndex] = useState();
    const [clickIndex, setClickIndex] = useState();
    const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function handleClick(key) {
        setClickIndex(key)
    }
    function handleHover(key) {
        setHoverIndex(key)
    }

    function handleMouseOut(key) {
        setHoverIndex(null)
    }
    return (
        <div className="stars" style={{fontSize: '4rem', textAlign: 'center'}}>
            {
                stars.map((star) =>
                        <FaStar 
                        key={star} 
                       onClick={()=> handleClick(star)} 
                       onMouseEnter={()=> handleHover(star)} 
                       onMouseLeave={()=> handleMouseOut()} 
                       style={star<=(hoverIndex ?? clickIndex) ? {color: 'gold', cursor: 'pointer'} : {cursor: 'pointer'}}
                       
                    />
                )

            }
        </div>
    )
}