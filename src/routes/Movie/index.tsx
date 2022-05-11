import { FormEvent, ChangeEvent, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

import styles from './movie.module.scss'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'
import { SearchIcon } from 'assets/svgs'



const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()
  const [ searchValue, setSearchValue ] = useState('')
  const [ pageNum, setPageNum ] = useState(0)

  const handleSearchFormSubmit = (event: FormEvent<HTMLFormElement>): void=> {
    event.preventDefault()
    setPageNum(1)
  }

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value)
    // setPage(Number(value) + 1)
  }


  return (
    <section className={styles.movieWrap}>
      
      <header className={styles.movieHeader}>
        <div className={styles.searchBox}>
          <form onSubmit={handleSearchFormSubmit}>
            <input 
              type='text' 
              className={styles.searchInput} 
              placeholder='영화 검색'
              onChange={handleSearchInputChange}
            />
            <div className={styles.searchIcon}><SearchIcon /></div>
            <button type='submit' aria-label='Search button' className={styles.searchButton}>GO</button>    
          </form>
        </div>
      </header>

      {!pageSection && <MovieList/>}
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