import React from 'react'
import '../index.css'

export default function TodoInput(props) {
    const { handleAddTodos , todoValue , setTodoValue } = props
  


    return (
        <header >
            <input value={todoValue} setTodoValue={setTodoValue} onChange={(e) => setTodoValue(e.target.value)} type="text" placeholder='enter todo' />
            <button onClick={() => { handleAddTodos(todoValue) 
                setTodoValue('')
            }} >Add</button>
        </header>
    )
}
