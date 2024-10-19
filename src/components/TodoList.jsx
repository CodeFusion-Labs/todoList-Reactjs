import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList() {

    let list = [
        'create an reatjs app',
        'make unite testes',
        'write an article about spring ioc',
        'print stickers',
        'go to chari3 rabat'
    ]

    return (

        <ul className='main'>
            {
                list.map((todo, todoIndex) => {
                    return (
                        <TodoCard key={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )

                })}
        </ul>
    )
}
