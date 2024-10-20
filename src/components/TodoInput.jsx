import React from 'react'
import '../index.css'

export default function TodoInput(porps) {
    const {handleAddTodos} = props
    const [todoValue , setTodoValue] = useState('')
    


  return (
   <header >
    <input type="text" placeholder='enter todo' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
    <button onClick={ () =>{handleAddTodos(todosValue)} }>add</button>
   </header>
  )
}
