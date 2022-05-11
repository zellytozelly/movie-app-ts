import { FormEvent, ChangeEvent, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useRecoil } from 'hooks/state'

import { getMovieApi } from 'services/movie'
import { searchDataState } from 'states/movieAtom'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'

import { SearchIcon } from 'assets/svgs'
import styles from './movie.module.scss'

const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()
  const [ searchValue, setSearchValue ] = useState<string>('')
  const [ pageNum, setPageNum ] = useState<number>(0)
  // const [ data, setData ] = useState<IMovieAPIRes>()
  const [ searchData, setSearchData ] = useRecoil(searchDataState)

  const handleSearchFormSubmit = (event: FormEvent<HTMLFormElement>): void=> {
    event.preventDefault()
    setPageNum(1)
  
    getMovieApi({
        s: searchValue,
        page: 1,
      }).then((res) => {
        setSearchData(res.data.Search)
        
      })
    
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

      <main>
        {!pageSection && <MovieList data={searchData}/>}
        {pageSection === 'favorite' && <MovieFavorite/>}
      </main>

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