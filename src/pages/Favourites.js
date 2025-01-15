import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/moviecard/MovieCard'

export const Favourites = () => {
  const { favorites } = useMovieContext()

return (
  favorites.length === 0 ? (
    <div>
      <h2>No favourites yet</h2>
    </div>
  ) : (
    <div className="movie-grid">
      {favorites.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  )
)
}

export default Favourites