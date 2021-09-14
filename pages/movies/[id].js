import Header from "../../components/Header";
import Movie from "../../components/Movie";
import { getMovieData, getMovieIds, getSimilarIds, getSimilarMovies } from "../../lib/movies";
import styles from '../../components/movies.module.css'

export default function SingleMovie({ movieData, similar }) {

    return (
        <>
            <Header />
            {movieData &&
                <>
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
            }
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

