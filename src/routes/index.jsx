import styles from './Routes.module.scss'
import Movie from './Movie'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Movie />}>
          <Route path=':pageSection' element={<Movie />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
