import styles from './Routes.module.scss'
// import TodoList from './TodoList'
// import Weather from './Weathers'
import Movie from './Movie'

const App = () => {
  return (
    <div className={styles.app}>
      {/* <TodoList />
      <Weather /> */}
      <Movie />
    </div>
  )
}

export default App
