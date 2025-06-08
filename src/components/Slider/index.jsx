import { Bs0CircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCircleFill } from 'react-icons/bs'
import './style.css'
import { useEffect, useState } from 'react'

export default function Slidder(pages = '1', limit = '5') {

    const [isLoading, setIsLoading] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    async function fetchImages(getPages, getLimit) {
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pages}&limit=${limit}`)
            const data = await response.json()

            setImages(data)
            setIsLoading(false)
            console.log(data);
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

    }

    return (
        <div className="slider-container">
            <span className={isLoading ? "arrow hide-current" : "arrow left-arrow"}>
                <BsArrowLeftCircleFill onClick={() => {
                    currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(previousSlide => previousSlide - 1)
                }} />
            </span>

            <div className="wrapper">
                {
                    isLoading ? <div className="loader">loading ...</div> :
                        images.map((imageItem, index) => (

                            <img
                                src={imageItem.download_url}
                                alt={imageItem.author}
                                key={imageItem.id}
                                className={currentSlide === index ? 'display-current' : 'display-current hide-current'}
                            />
                        ))
                }
                <div className="circles">
                    {
                        images && images.map((_, index) =>


                            <BsCircleFill key={index} className={currentSlide === index ? 'ico active-circle' : 'ico'}  onClick={
                                ()=> setCurrentSlide(index)
                            } />
                        )
                    }
                </div>

            </div>

            <span className={isLoading ? "arrow hide-current" : "arrow right-arrow"}>
                <BsArrowRightCircleFill onClick={() => {
                    currentSlide === images.length - 1 ? setCurrentSlide(0) : setCurrentSlide(previousSlide => previousSlide + 1)
                }} />
            </span>
        </div >
    )
}