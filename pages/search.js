import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MoviesLayout from '../components/MoviesLayout';
import { getMoviesBySearch } from '../lib/movies';

export default function Home() {
    const router = useRouter()
    const { term } = router.query

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMoviesBySearch(term).then(resp => setMovies(resp))
    }, [term])

    return (
        <>
            <MoviesLayout movies={movies} />
        </>
    )
}