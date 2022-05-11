import { useRecoil } from 'hooks/state'
import { MutableRefObject } from 'react'
import { searchDataState } from 'states/movieAtom'

import { ISearch } from 'types/movie.d'
import styles from './moviePage.module.scss'
 
interface Props {
  data: ISearch[]
  pageEndRef?: MutableRefObject<null>
  searchValue: string
}

const MovieList = ({data, pageEndRef, searchValue }:Props) => {
  if (!data) return null

  return (
    <section className={styles.movieBodyWrap}>
      

      <ul>
        {data.map((item)=>(
          <li key={item.imdbID} className={styles.movieItemWrap}>
            <dt>Poster</dt>
            <dd><img src={`${item.Poster}`} alt={`${item.Title}`} className={styles.posterImg}/></dd>
            <dt>Title</dt>
            <dd>{item.Title}</dd>
            <dt>Year</dt>
            <dd>({item.Year})</dd>
            <dt>Type</dt>
            <dd>{item.Type}</dd>

          </li>
          ))}

        <div className={styles.bottomRef} ref={pageEndRef} />
      </ul>


    </section>

  )
}

export default MovieList