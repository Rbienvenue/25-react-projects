import React from "react"
function MovieCard({ movie }) {

    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400?text=Image+Not+Found' : movie.Poster}
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard