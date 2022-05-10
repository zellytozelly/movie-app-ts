import styles from './Routes.module.scss'
// import TodoList from './TodoList'
// import Weather from './Weathers'
import Movie from './Movie'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Movie />}>
          <Route path=':pageSection' element={<Movie />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
