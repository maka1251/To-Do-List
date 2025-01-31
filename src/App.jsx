import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <Header />
      <TodoList />
      <main>
        <p style={{ textAlign: 'center' }}>To-Do список!</p>
      </main>
    </>
  )
}

export default App
