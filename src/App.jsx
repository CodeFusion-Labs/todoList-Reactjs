import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState , useEffect } from "react"

function App() {

const  [todos , setTodo] = useState([])
const  [todoValue , setTodoValue] = useState('')

function percistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos:newList}) )
}

function handleAddTodos(newTodo){
  const newTodoList = [...todos , newTodo]
  percistData(newTodoList)
  setTodo(newTodoList)

}

function handleEditTodo(index){
 const  valueTobeEdited = todos[index]
 setTodoValue(valueTobeEdited)
 handleDeleteTodo(index)

}

function handleDeleteTodo (index){
  const newTodoList = todos.filter((todo , todoIndex) => {
    return todoIndex !== index
  })
  percistData(newTodoList)
   setTodo(newTodoList)
}

useEffect(()=>{
  if(!localStorage){
    return
  }
 let localTodos = localStorage.getItem('todos')
 if(!localTodos){
  return
 }
 localTodos = JSON.parse(localTodos).todos
 setTodo(localTodos)
 }, [])
  return (
    <main className="background"> 
<TodoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
<TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
