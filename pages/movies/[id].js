import Header from "../../components/Header";
import Movie from "../../components/Movie";
import { getMovieData, getMovieIds, getSimilarIds, getSimilarMovies } from "../../lib/movies";
import styles from '../../components/movies.module.css'

export default function SingleMovie({ movieData, similar }) {

    return (
        <>
            <Header />
            <div className={styles.main_card}>
                <Movie movie={movieData} />
                <h4>Rating: {movieData.vote_average}</h4>
                <p>Genres: {movieData.genres.map((genre) => <span key={genre.id} className={styles.genre}>{genre.name} </span>)}</p>
            </div>
            <h3>Similar Movies:</h3>
            <div className={styles.container}>
                {similar.map(movie => {
                    return <Movie movie={movie} key={movie.id} />
                })}
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getMovieIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const movieData = await getMovieData(params.id)
    const similar = await getSimilarMovies(params.id)
    return {
        props: {
            movieData,
            similar
        }
    }
}

// export async function getServerSideProps({ params }) {
//     const similar = await getSimilarMovies(params.id).then(resp => resp.json())
//     return { props: { similar } }
// }

{/* const resp = {
    adult: false,
    backdrop_path: '/1Txzm4bY5ZDqvgMl7MmHeBMl7HH.jpg',
    belongs_to_collection: null,
    budget: 0,
    genres: [
        { id: 80, name: 'Crime' },
        { id: 18, name: 'Drama' },
        { id: 53, name: 'Thriller' }
    ],
    homepage: '',
    id: 860425,
    imdb_id: 'tt5740246',
    original_language: 'es',
    original_title: 'Sinaliento',
    overview: '',
    popularity: 1567.302,
    poster_path: '/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg',
    production_companies: [
        {
            id: 159323,
            logo_path: null,
            name: 'Ecah Film',
            origin_country: ''
        }
    ],
    production_countries: [{ iso_3166_1: 'DO', name: 'Dominican Republic' }],
    release_date: '2021-08-11',
    revenue: 0,
    runtime: 106,
    spoken_languages: [{ english_name: 'Spanish', iso_639_1: 'es', name: 'Español' }],
    status: 'Released',
    tagline: '',
    title: 'Breathless',
    video: false,
    vote_average: 7,
    vote_count: 18
} */}