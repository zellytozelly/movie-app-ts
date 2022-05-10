import { useMount, useState } from 'hooks'
import { getMovieApi } from 'services/movie'
import { IMovieAPIRes } from 'types/movie.d'
import { SearchIcon } from 'assets/svgs'
import styles from './Movie.module.scss'

const Movie = () => {
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
    <section className={styles.movieWrap}>
      <header className={styles.movieHeader}>
        <div className={styles.searchBox}>
          <input type='text' className={styles.searchInput} placeholder='영화 검색'/>
          <div className={styles.searchIcon}><SearchIcon /></div>
          <button type='button' aria-label='Search button' />    
        </div>
      </header>
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
      <footer className={styles.movieFooter}>3</footer>
    </section>
  )
}

export default Movie