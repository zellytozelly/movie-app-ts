import { ReactNode, useEffect, useState } from 'react'
import { ISearch } from 'types/movie'
import cx from 'classnames'

import styles from './moviePage.module.scss'
import { HeartIcon } from 'assets/svgs'
import noPosterImg from 'assets/images/noPoster.png'
import { useRecoil } from 'hooks/state'
import { favoriteDataState, oneFavoriteState } from 'states/movieAtom'
import Modal from 'components/modal/Modal'

const store = require('store')

interface ParamProps {
  handleModalToggle: Function
  handleFavoriteToggle: Function
  isOpenModal: Boolean
}

const MovieFavorite = ({ handleModalToggle, handleFavoriteToggle, isOpenModal }: ParamProps) => {
  const [favData, setFavValue] = useState<ISearch[]>([])
  const [favoriteData, setFavoriteData] = useRecoil(favoriteDataState)
  const [oneFavorite, setOneFavorite] = useRecoil(oneFavoriteState)
  const favLoop: ISearch[] = []

  useEffect(() => {
    favFunction()
  }, [])

  const favFunction = () => {
    store.each((key: ISearch, value: String) => {
      favLoop.push(key)
    })
    setFavoriteData(favLoop)
  }

  // const favData = store.each((key: ISearch, value: String) => {
  //   if (!favoriteData.includes(key)) {
  //     favoriteData.push(key)
  //   }
  // })
  // const temp = store.get(key)
  // console.log(temp)

  return (
    <section className={styles.movieBodyWrap}>
      <ul>
        {favoriteData.map((item) => (
          <button
            type='button'
            key={item.imdbID}
            className={styles.dialogButton}
            onClick={() => handleModalToggle(item)}
          >
            <li key={item.imdbID} className={styles.movieItemWrap}>
              <div className={styles.moviePosterWrap}>
                <img
                  src={`${item.Poster === 'N/A' ? noPosterImg : item.Poster}`}
                  alt={`${item.Title}`}
                  className={styles.posterImg}
                />
              </div>
              <div className={styles.movieTextWrap}>
                <dt>Title</dt>
                <dd className={styles.movieTextTitle}>{item.Title}</dd>
                <dt>Year</dt>
                <dd>({item.Year})</dd>
                <dt>Type</dt>
                <dd>{item.Type}</dd>
              </div>
              <div className={cx(styles.movieFavoriteWrap, styles.isFavorite)}>
                <HeartIcon /> like
              </div>
            </li>
          </button>
        ))}
      </ul>

      {isOpenModal && (
        <Modal>
          <div>
            <h2>{oneFavorite.Title}</h2>
            <button type='button' onClick={() => handleFavoriteToggle()}>
              즐겨찾기
            </button>
            <button type='button' onClick={() => handleModalToggle()}>
              취소
            </button>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default MovieFavorite
