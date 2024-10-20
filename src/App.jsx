import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {

const  [todos , seTodos] = useState([
  'create an reatjs app',
  'make unite testes',
  'write an article about spring ioc',
  'print stickers',
  'go to chari3 rabat'
])

function handleAddTodo(newTodo){
  const newTodoList = [...todos , newTodo]
  setTodo(newTodoList)

}
  return (
    <main className="background"> 
<TodoInput  handleAddTodos={handleAddTodo} />
<TodoList todos={todos}/>
    </main>
  )
}

export default App
