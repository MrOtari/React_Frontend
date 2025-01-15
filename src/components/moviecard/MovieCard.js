import {useMovieContext} from '../../context/MovieContext'

const MovieCard = ({ movie }) => {
    const { isFavorite, addFavorite, removeFavorite } = useMovieContext()

    const favoriteHandler = (e) => {
        e.preventDefault()
        if (isFavorite(movie)) {
            removeFavorite(movie)
        } else {
            addFavorite(movie)
        }
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt="movie poster" />

                <div className="movie-overlay">
                    <button className='favorite_btn' onClick={favoriteHandler}>favorite_btn</button>
                    <button className='details_btn'>View Details</button>
                </div>

                <div className="movie-info">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard