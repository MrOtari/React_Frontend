import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('favorites');
        if (data) {
            setFavorites(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if (!favorites.some(favorite => favorite.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
        alert(`${movie.Title} added to favorites`);
    }

    const removeFavorite = (movie) => {
        setFavorites(favorites.filter(favorite => favorite.imdbID !== movie.imdbID));
        alert(`${movie.Title} removed from favorites`);
    }

    const isFavorite = (movie) => {
        return favorites.some(favorite => favorite.imdbID === movie.imdbID);
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}