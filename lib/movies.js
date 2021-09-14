import config from "../config/config";

export async function getMoviesData() {
    try {
        const movies_data = await fetch(config.APIEndpoint).then(resp => resp.json())
        return movies_data.results;
    } catch (e) {
        console.log(e.message);
    }
}

export async function getMovieIds() {
    try {
        const movies_data = await fetch(config.APIEndpoint).then(resp => resp.json())
        let similarIds = []

        for (let movie of movies_data.results) {
            // await movies_data.results.map(async (movie) => await getSimilarIds(movie.id))
            const similar = await getSimilarIds(movie.id)
            similarIds = [...similarIds, ...similar]
        }
        const ids = movies_data.results.map(movie => {
            return {
                params: {
                    id: movie.id.toString()
                }
            }
        })
        return [...ids, ...similarIds]
    } catch (e) {
        console.log(e.message);
    }
}

export async function getMovieData(id) {
    try {
        const movie_data = await fetch(config.singleMovieEndpoint(id)).then(resp => resp.json())
        return movie_data
    } catch (error) {
        console.log(error)
    }
}

export async function getMovieGenres() {
    try {
        const genres = await fetch(config.genresEndpoint).then(resp => resp.json())
        return genres.genres.map((genre) => {
            return {
                params: {
                    genre_id: genre.id.toString()
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export async function getSimilarMovies(id) {
    try {
        const movies = await fetch(config.similarTitlesEndpoint(id))
            .then(resp => resp.json())
            .then(resp => resp.results)
        return movies
    } catch (error) {
        console.log(error)
    }
}

export async function getSimilarIds(id) {
    try {
        const movies_data = await fetch(config.similarTitlesEndpoint(id)).then(resp => resp.json())
        return movies_data.results.map(movie => {
            return {
                params: {
                    id: movie.id.toString()
                }
            }
        })
    } catch (e) {
        console.log(e.message);
    }
}

export async function getMoviesBySearch(query) {
    try {
        const movies = await fetch(config.searchEndpoint(query)).then(resp => resp.json())
        return movies.results
    } catch (error) {
        console.log(error)
    }
}