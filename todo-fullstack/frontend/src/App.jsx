import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
  const [todos, setTodos] = useState([])

  
  return (
    <>
      <div>
        <CreateTodo/>
        <Todos todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
