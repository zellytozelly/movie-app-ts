import { Link, NavLink, useParams } from 'react-router-dom'
import styles from './Movie.module.scss'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'
import { SearchIcon } from 'assets/svgs'
import { KeyboardEvent, ChangeEvent, useState } from 'react'

const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()
  const [ searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value)
    // setPage(Number(value) + 1)
  }

  const handleSearchInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      console.log(searchValue)
    }
    // setPage(Number(value) + 1)
  }


  return (
    <section className={styles.movieWrap}>
      
      <header className={styles.movieHeader}>
        <div className={styles.searchBox}>
          <input 
            type='text' 
            className={styles.searchInput} 
            placeholder='영화 검색'
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchInputKeyDown}
          />
          <div className={styles.searchIcon}><SearchIcon /></div>
          <button type='button' aria-label='Search button' className={styles.searchButton}>GO</button>    
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