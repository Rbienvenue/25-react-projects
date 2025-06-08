import { useEffect, useState } from 'react'
import './style.css'

export default function LoadMoreData() {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [loadMore, setLoadMore] = useState(0)

    async function fetchProducts() {
        try {
            setIsLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${loadMore === 0 ? 0 : loadMore * 20}`)

            const productsData = await response.json()
            setIsLoading(false)
            setProducts(prev => loadMore === 0 ? productsData.products : [...prev, ...productsData.products])
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [loadMore])
    return <div className="container">
        {
            isLoading ? <p className='loader'>loading data ....</p> : products.map(product =>
                <div className="product" key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>{product.title}</p>
                </div>
            )
        }
        <div className="button-wrapper">
            <button disabled={products.length === 100 ? true : false} onClick={
            () => setLoadMore(prevCount => prevCount + 1)
        }>Show more</button>
        </div>
    </div>
}