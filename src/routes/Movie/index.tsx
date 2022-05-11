import { FormEvent, ChangeEvent, useState, useEffect, useRef } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'

import { useRecoil } from 'hooks/state'
import { searchDataState } from 'states/movieAtom'
import { getMovieApi } from 'services/movie'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'

import { SearchIcon } from 'assets/svgs'
import styles from './movie.module.scss'

const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()
  const [ searchValue, setSearchValue ] = useState<string>('')
  const [ searchData, setSearchData ] = useRecoil(searchDataState)

  const [ movieCount, setMovieCount] = useState<number>(0)
  const [ pageNum, setPageNum ] = useState<number>(-1)
  const pageEndRef = useRef(null)

  const handleSearchFormSubmit = (event: FormEvent<HTMLFormElement>): void=> {
    event.preventDefault()
    getMovieApi({
        s: searchValue,
        page: pageNum,
      }).then((res) => {
        setSearchData(res.data.Search)
      }).catch((error) => {
        console.log(error.message)
      })

  }

  console.log(pageNum)

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPageNum((prev) => prev + 1)
      }
    }, { threshold: 0.8 })
      if (pageEndRef.current) observer.observe(pageEndRef.current as Element)
  }, [])



  // console.log(searchData.length)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value)
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
            <button type='submit' aria-label='Search button' className={styles.searchButton}>검색</button>    
          </form>
        </div>
      </header>

      <main>
        {!pageSection && <MovieList data={searchData} pageEndRef={pageEndRef}/>}
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