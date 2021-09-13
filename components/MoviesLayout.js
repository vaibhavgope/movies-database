import styles from './movies.module.css'
import Movie from './Movie'
import Header from './Header'

export default function MoviesLayout(props) {
    return (
        <>
            <Header />
            <div className={styles.container}>
                {props.movies.map(movie => {
                    // id, title, overview: desc, backdrop_path: img
                    return (<div key={movie.id}>
                        <Movie movie={movie} />
                    </div>)
                })}
            </div>
        </>
    )
}