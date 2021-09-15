const key = process.env.API_KEY

const config = {
    APIEndpoint: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    imgEndpoint: `https://image.tmdb.org/t/p/original`,
    searchEndpoint: (term) => `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${term}`,
    singleMovieEndpoint: (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`,
    genresEndpoint: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
    similarTitlesEndpoint: (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${key}&language=en-US&page=1`
};

export default config;