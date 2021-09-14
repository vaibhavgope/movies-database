const config = {
    APIEndpoint: "https://api.themoviedb.org/3/movie/popular?api_key=12d0d0152e46f86ae03b9f7e6f83c85a",
    imgEndpoint: "https://image.tmdb.org/t/p/original",
    searchEndpoint: (term) => `https://api.themoviedb.org/3/search/movie?api_key=12d0d0152e46f86ae03b9f7e6f83c85a&query=${term}`,
    singleMovieEndpoint: (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}?api_key=12d0d0152e46f86ae03b9f7e6f83c85a&language=en-US`,
    genresEndpoint: 'https://api.themoviedb.org/3/genre/movie/list?api_key=12d0d0152e46f86ae03b9f7e6f83c85a&language=en-US',
    similarTitlesEndpoint: (movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=12d0d0152e46f86ae03b9f7e6f83c85a&language=en-US&page=1`
};

export default config;