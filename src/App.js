import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const apiUrl = "http://www.omdbapi.com?apikey=a00d1b14"
  const defaultMovies = [
    {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman Returns",
      "Year": "2006",
      "imdbID": "tt0348150",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjg1ZGRiMTEtYmU4Zi00NTkwLWJmODQtMjU3MTAyMGQ2OGZlXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman",
      "Year": "1978",
      "imdbID": "tt0078346",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzFlZDJjMDAtZDYxZS00NzZhLTk2ODMtZWRlODA3Njk3ZTdmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman II",
      "Year": "1980",
      "imdbID": "tt0081573",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzg5ZjJkNGEtNzhjNy00YzI4LTlkZjItNTViNmYxNGZlZWE2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman III",
      "Year": "1983",
      "imdbID": "tt0086393",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjcyN2E4NzQtYmUwZC00NmQ5LWJkMWUtMThjZGIwZGIwYzZmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
      "Year": "2016",
      "imdbID": "tt18689424",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    },
    {
      "Title": "Superman IV: The Quest for Peace",
      "Year": "1987",
      "imdbID": "tt0094074",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkODhlYjEtMDEyZS00YjZmLWJjMDctZGI3MGJiNDEyNTE2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman & Lois",
      "Year": "2021–2024",
      "imdbID": "tt11192306",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWU5NmFlYjktMmM1NS00NGMwLWIzN2MtMWQ2YTg0ZWMyNmVjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Lois & Clark: The New Adventures of Superman",
      "Year": "1993–1997",
      "imdbID": "tt0106057",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzhmYWEwMTUtZjExNS00MjgzLTllN2UtOGExNDM4NWIzMjVjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Superman/Batman: Apocalypse",
      "Year": "2010",
      "imdbID": "tt1673430",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ]
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search || [])
  }

  useEffect(() => {
    searchMovies(searchTerm)
  }, [])
  return (
    <div className="App">
      <div className='flex'>
      <h1>MovieLand</h1>

<div className='search'>
  <input
    placeholder='Enter a movie name'
    value={searchTerm}
    onChange={(e) => { setSearchTerm(e.target.value) }}
  />
  <img
    src={searchIcon}
    alt='search'
    onClick={() => searchMovies(searchTerm)}
  />
</div>
      </div>
      {
        movies.length > 0 ?
          (
            <div className='container'>
              {
                movies.map((movie) =>
                  <MovieCard movie={movie} />
                )
              }
            </div>
          ) :
          (
            
            <div className='container'>
              <div className='empty'>
              <h3>No movies searched</h3>
            </div>
              {
                defaultMovies.map((defaultMovie) => 
                  <MovieCard movie={defaultMovie} />
                )
              }
            </div>
          )
      }
    </div>
  );
}

export default App;
