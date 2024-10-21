import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {

const  [todos , setTodo] = useState([])
const  [todoValue , setTodoValue] = useState('')
function handleAddTodos(newTodo){
  const newTodoList = [...todos , newTodo]
  setTodo(newTodoList)

}

function handleEditTodo(index){
 const  valueTobeEdited = todos[index]
 setTodoValue(valueTobeEdited)
 handleDeleteTodo(index)

}

function handleDeleteTodo (index){
  const newTodolist = todos.filter((todo , todoIndex) => {
    return todoIndex !== index
  })

   setTodo(newTodolist)
}
  return (
    <main className="background"> 
<TodoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
<TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
