import { useRecoil } from 'hooks/state'
import { MutableRefObject, useEffect } from 'react'
import { oneFavoriteState } from 'states/movieAtom'
import cx from 'classnames'

import Modal from 'components/common/modal/Modal'
import { ISearch } from 'types/movie.d'
import styles from './MoviePage.module.scss'
import { HeartIcon } from 'assets/svgs'
import noPosterImg from 'assets/images/noPoster.png'

import store from 'store'

interface Props {
  data: ISearch[]
  pageEndRef?: MutableRefObject<null>
  handleModalToggle: Function
  handleFavoriteToggle: Function
  isOpenModal: Boolean
}

const MovieList = ({ data, pageEndRef, handleModalToggle, handleFavoriteToggle, isOpenModal }: Props) => {
  const [oneFavorite] = useRecoil(oneFavoriteState)

  useEffect(() => {
    favFunction()
  }, [])

  const favFunction = () => {
    const favLoop: string[] = []
    store.each((key: ISearch, value: string) => {
      favLoop.push(value)
    })
    return favLoop
  }

  if (!data) return null
  return (
    <section className={styles.movieBodyWrap}>
      <ul>
        {data.map((item) => (
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
              <div
                className={cx(styles.movieFavoriteWrap, { [styles.isFavorite]: favFunction().includes(item.imdbID) })}
              >
                <HeartIcon /> like
              </div>
            </li>
          </button>
        ))}
        <div className={styles.bottomRef} ref={pageEndRef} />
      </ul>

      {isOpenModal && (
        <Modal>
          <div>
            <h2 className={styles.modalTitle}>{oneFavorite.Title}</h2>
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

export default MovieList
