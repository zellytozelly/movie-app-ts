import styles from './routes.module.scss'
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
        <Route path='*' element={<div>404</div>}/>
      </Routes>
    </div>
  )
}

export default App
