import { useState, useEffect } from 'react'
import Search from '../components/search/Search'
import { getMovies } from '../api/api'

const Home = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        getMovies()
            .then(data => setMovies(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])


    const handleSearch = (e) => {
        e.preventDefault();

        if (!search.trim()) {
            alert('Please enter a movie title')
            return
        }

        try {
            const searchMovies = movies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()))
            setMovies(searchMovies)
        } catch (error) {
            console.error('Error searching for movies', error)
        }

        setSearch('')
    }

    return (
        <div className="home">
            <Search search={search} setSearch={setSearch} movies={movies} handleSearch={handleSearch} />

            <div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
        
    )
}

export default Home