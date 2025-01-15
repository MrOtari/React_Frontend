import MovieCard from '../moviecard/MovieCard'
import { useState } from 'react'

const Search = ({ search, setSearch, movies, handleSearch }) => {
    const [visible, setVisible] = useState(2)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 2)
    }

    return (
        <div className='search'>

            <h1>Search for a movie</h1>
            
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text"
                    placeholder="Search for a movie..."
                    className='search-input'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button className='search_btn'>Search</button>
            </form>

            <h2>Popular Movies</h2>

            <div className="movie-grid">
                {movies.slice(0, visible).map((movie, index) => (
                    movie.Title.toLowerCase().includes(search) &&
                    <MovieCard key={index} movie={movie} />))}
            </div>

            {visible < movies.length &&
                <div className="show-more">
                    <button onClick={showMoreItems}>Show more</button>
                </div>
            }

        </div>
    )
}

export default Search