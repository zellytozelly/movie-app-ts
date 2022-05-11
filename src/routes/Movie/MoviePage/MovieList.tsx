import { ISearch } from 'types/movie.d'
import styles from './moviePage.module.scss'

interface Props {
  data: ISearch[]
}

const MovieList = ({data}:Props) => {
  if (!data) return null
  return (
    <section className={styles.movieBodyWrap}>
      <ul>
        {data.map((item)=>(
          <li key={item.imdbID} className={styles.movieItemWrap}>
            <dt>Poster</dt>
            <dd><img src={`${item.Poster}`} alt={`${item.Title}`} className={styles.posterImg}/></dd>
            <dt>Title</dt>
            <dd>{item.Title}</dd>
            <dt>Year</dt>
            <dd>({item.Year})</dd>
            <dt>Type</dt>
            <dd>{item.Type}</dd>

          </li>
          ))}
      </ul>
    </section>

  )
}

export default MovieList