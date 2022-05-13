import { FormEvent, ChangeEvent, useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import cx from 'classnames'

import { useRecoil } from 'hooks/state'
import { modalClickState, searchDataState } from 'states/movieAtom'
import { getMovieApi } from 'services/movie'
import MovieList from './MoviePage/MovieList'
import MovieFavorite from './MoviePage/MovieFavorite'

import { SearchIcon } from 'assets/svgs'
import styles from './movie.module.scss'

const Movie = () => {
  const { pageSection } = useParams<{ pageSection: string }>()
  const [searchValue, setSearchValue] = useState<string>('')
  const [searchData, setSearchData, resetSearchData] = useRecoil(searchDataState)
  const [pageNum, setPageNum] = useState<number>(0)
  const pageEndRef = useRef(null)
  const [isOpenModal, setOpenModal] = useRecoil(modalClickState)

  const handleSearchFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    setSearchData([])
    resetSearchData()
    event.preventDefault()

    setPageNum(1)
    getAPI()
  }

  useEffect(() => {
    getAPI()
  }, [pageNum])

  const getAPI = () => {
    if (searchValue === '') return

    getMovieApi({
      s: searchValue,
      page: pageNum,
    })
      .then((res) => {
        const apiData = res.data
        // setSearchData(prev=>[...prev].concat(apiData.Search))
        // setTimeout(() => {
        console.log('s=', pageNum)
        setSearchData((prev) => [...prev, ...apiData.Search])
        // }, 120)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          setPageNum((prev) => prev + 1)
        }
      },
      { threshold: 0.8 }
    )
    if (pageEndRef.current) observer.observe(pageEndRef.current as Element)
  }, [])

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value)
  }

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal)
  }, [isOpenModal])

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
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <button type='submit' aria-label='Search button' className={styles.searchButton}>
              검색
            </button>
          </form>
        </div>
      </header>

      <main>
        {!searchData.length && <div className={styles.noSearchAnswer}>검색 결과가 없습니다.</div>}
        {!pageSection && (
          <MovieList
            data={searchData}
            pageEndRef={pageEndRef}
            onClickToggleModal={onClickToggleModal}
            isOpenModal={isOpenModal}
          />
        )}
        {pageSection === 'favorite' && <MovieFavorite />}
      </main>

      <footer className={styles.movieFooterWrap}>
        <main className={styles.movieFooter}>
          <nav className={styles.lnb}>
            <ul>
              <li>
                <Link to='' className={cx({ [styles.isActive]: !pageSection })}>
                  검색
                </Link>
              </li>
              <li>
                <NavLink to='favorite' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                  즐겨찾기
                </NavLink>
              </li>
            </ul>
          </nav>
        </main>
      </footer>
    </section>
  )
}

export default Movie
