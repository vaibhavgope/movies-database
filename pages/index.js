import { getMoviesData } from '../lib/movies'
import MoviesLayout from '../components/MoviesLayout';

export default function Home({ moviesData }) {
  return (
    <MoviesLayout movies={moviesData} />
  )
}

export async function getStaticProps() {
  const moviesData = await getMoviesData();
  return {
    props: {
      moviesData
    }
  }
}



