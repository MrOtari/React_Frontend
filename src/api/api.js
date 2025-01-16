const BASE_URL = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'

export const getMovies = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data
}

export const getMovie = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data = await response.json()
    return data
}

export const getFavourites = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    return data
}

export const searchMovies = async (movie) => {
    const response = await fetch(`${BASE_URL}?q=${movie}`)
    const data = await response.json()
    return data
}