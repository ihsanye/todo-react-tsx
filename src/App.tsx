import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div>
      <div className='app-header'><h1>TODO APP</h1></div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
