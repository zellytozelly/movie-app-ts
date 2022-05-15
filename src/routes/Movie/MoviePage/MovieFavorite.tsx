import { useEffect, useState } from 'react'
import { ISearch } from 'types/movie'
import cx from 'classnames'

import styles from './MoviePage.module.scss'
import { HeartIcon } from 'assets/svgs'
import noPosterImg from 'assets/images/noPoster.png'
import { useRecoil } from 'hooks/state'
import { favoriteDataState, oneFavoriteState } from 'states/movieAtom'
import Modal from 'components/common/modal/Modal'

interface ParamProps {
  handleModalToggle: Function
  handleFavoriteRemove: Function
  isOpenModal: Boolean
  favDelFunction: Function
}

const MovieFavorite = ({ handleModalToggle, handleFavoriteRemove, isOpenModal, favDelFunction }: ParamProps) => {
  const [favoriteData] = useRecoil(favoriteDataState)
  const [oneFavorite] = useRecoil(oneFavoriteState)

  useEffect(() => {
    favDelFunction()
  }, [])

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
            <button type='button' onClick={() => handleFavoriteRemove(oneFavorite.imdbID)}>
              즐겨찾기 해제
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
