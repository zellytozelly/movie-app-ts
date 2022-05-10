import styles from './Movie.module.scss'

import { useMount, useState } from 'hooks'
import { getMovieApi } from 'services/movie'
import { IMovieAPIRes } from 'types/movie.d'

const Movie = () => {
  const [data, setData] = useState<IMovieAPIRes>()

  useMount(() => {
    getMovieApi({
      apikey: '',
      s: 'iron man',
      page: 1,
    }).then((res) => {
      setData(res.data)
    })
  })

  if (!data) return null

  return (
    <section>
      <header>
        <div>
          <input type='text'/>
          <button type='button' aria-label='Search button' />
        </div>
      </header>
      <div>
        <ul>
          {data.Search.map((item)=>(
            <li key={item.imdbID}>
              <dt>Poster</dt>
              <dd><img src={`${item.Poster}`} alt={`${item.Title}`}/></dd>
              <dt>Title</dt>
              <dd>{item.Title}</dd>
              <dt>Year</dt>
              <dd>{item.Year}</dd>
              <dt>Type</dt>
              <dd>{item.Type}</dd>

            </li>
          ))}
        </ul>
      </div>
      <footer>3</footer>
    </section>
  )
}

export default Movie