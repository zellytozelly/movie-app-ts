import { Link, NavLink, useParams } from 'react-router-dom'
import styles from './Movie.module.scss'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'
import { SearchIcon } from 'assets/svgs'

const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()

  return (
    <section className={styles.movieWrap}>
      
      <header className={styles.movieHeader}>
        <div className={styles.searchBox}>
          <input type='text' className={styles.searchInput} placeholder='영화 검색'/>
          <div className={styles.searchIcon}><SearchIcon /></div>
          <button type='button' aria-label='Search button' />    
        </div>
      </header>

      {!pageSection && <MovieList />}
      {pageSection === 'favorite' && <MovieFavorite/>}


      <footer className={styles.movieFooterWrap} >
        <main className={styles.movieFooter}>
          <nav className={styles.lnb}>
            <ul>
              <li>
                <Link to=''>검색</Link>
              </li>
              <li>
                <NavLink to='favorite'>즐겨찾기</NavLink>
              </li>
            </ul>
          </nav>
        </main>
      </footer>

    </section>
  )
}

export default Movie