import { useMount, useState } from 'hooks'
import { getMovieApi } from 'services/movie'
import { IMovieAPIRes } from 'types/movie.d'
import styles from './MoviePage.module.scss'

const MovieList = () => {
  const [data, setData] = useState<IMovieAPIRes>()

  useMount(() => {
    getMovieApi({
      s: 'iron man',
      page: 1,
    }).then((res) => {
      setData(res.data)
    })
  })

  if (!data) return null

  return (
    <section className={styles.movieBodyWrap}>
      <ul>
        {data.Search.map((item)=>(
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