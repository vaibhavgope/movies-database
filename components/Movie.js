import Image from 'next/image'
import config from '../config/config'
import Link from 'next/link'
import styles from './movies.module.css'

export default function Movie({ movie }) {
    return (
        <div className={styles.movie}>
            <Link href={`/movies/${movie.id}`} passHref>
                <div>
                    <Image
                        src={config.imgEndpoint + movie.backdrop_path}
                        height={300}
                        width={300}
                        objectFit='cover'
                        alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        </div>
    )
}