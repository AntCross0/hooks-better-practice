import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]


const TodoApp = () => {

    const [todos] = useReducer( todoReducer, initialState)

    console.log(todos);

  return (
    <div>
      <h1 className='text-4xl font-bold m-3'>Todo App</h1>
    </div>
  )
}

export default TodoApp
