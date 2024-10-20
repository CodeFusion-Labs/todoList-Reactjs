import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {

const  [todos , setTodo] = useState([
  'create an reatjs app',
  'make unite testes',
  'write an article about spring ioc',
  'print stickers',
  'go to chari3 rabat'
])

function handleAddTodos(newTodo){
  const newTodoList = [...todos , newTodo]
  setTodo(newTodoList)

}

function handleEditTodo (index){

}

function handleDeleteTodo (index){
  const newTodolist = todos.filter((todo , todoIndex) => {
    return todoIndex !== index
  })

   setTodo(newTodolist)
}
  return (
    <main className="background"> 
<TodoInput  handleAddTodos={handleAddTodos} />
<TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
