import Image from 'next/image'
import config from '../pages/config/config'
import Link from 'next/link'

export default function Movie({ movie }) {
    return (
        <div>
            <Link href={`/movies/${movie.id}`} passHref>
                <div>
                    <Image
                        src={config.imgEndpoint + movie.backdrop_path}
                        height={300}
                        width={300}
                        alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        </div>
    )
}