import { useRecoil } from 'hooks/state'
import { MutableRefObject } from 'react'
import { modalClickState, searchDataState } from 'states/movieAtom'

import Modal from 'components/modal/Modal'
import { ISearch } from 'types/movie.d'
import styles from './moviePage.module.scss'
import { HeartIcon } from 'assets/svgs'
import noPosterImg from 'assets/images/noPoster.png'
 
interface Props {
  data: ISearch[]
  pageEndRef?: MutableRefObject<null>
  onClickToggleModal: () => void
  isOpenModal: Boolean
}

const MovieList = ({data, pageEndRef, onClickToggleModal, isOpenModal }:Props) => {
  if (!data) return null

  return (
    <section className={styles.movieBodyWrap}>
      
      <ul>
        {data.map((item)=>(
          <button type='button' key={item.imdbID} className={styles.dialogButton} onClick={onClickToggleModal}>
            <li key={item.imdbID} className={styles.movieItemWrap}>
            
              <div className={styles.moviePosterWrap}>
                <img src={`${(item.Poster === 'N/A') ? noPosterImg : item.Poster}`} alt={`${item.Title}`} className={styles.posterImg}/>
              </div>
              <div className={styles.movieTextWrap}>
                <dt>Title</dt>
                <dd className={styles.movieTextTitle}>{item.Title}</dd>
                <dt>Year</dt>
                <dd>({item.Year})</dd>
                <dt>Type</dt>
                <dd>{item.Type}</dd>
              </div>
              <div className={styles.movieFavoriteWrap}>
                <HeartIcon /> like
              </div>

            </li>
          </button>
          ))}

        <div className={styles.bottomRef} ref={pageEndRef} />
      </ul>
      
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          이곳에 children이 들어갑니다.
        </Modal>
      )}

    </section>


  )
}

export default MovieList