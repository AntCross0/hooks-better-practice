import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import '../../index.css';
import  { ListTodos } from './ListTodos';
import TodoForm from './TodoForm';

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer( todoReducer, [], init);

    useEffect( () => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    },[todos]);

    const handleTodoAdd = ( newTodo ) => {
      dispatch({ 
        type: 'add',
        payload: newTodo
      });
    }

    const handleToggle = (todoId) => {
        dispatch({
          type: 'toggle',
          payload: todoId
         });
      }
    const deleteAction = (todoId) => {
      const action = {
        type: 'delete',
        payload: todoId
      }
      dispatch(action);
    }

  return (
    <>
      <div  className='relative flex flex-col bg-slate-100 h-96 rounded max-w-[40%] mx-auto overflow-y-auto scroll-smooth '>
        <h1 className='text-4xl font-bold mx-2 my-2'>Todo App ({ todos.length })</h1>
        <hr className='my-3 mx-2' />
          <ListTodos className='z-50' todos={todos} handleToggle={ handleToggle } deleteAction={ deleteAction }/>
          <div className='sticky bottom-0 w-full p-2 bg-white border-t-2 mt-2'>
          <TodoForm handleAddTodo={ handleTodoAdd } />
        </div>
      </div>
  </>
  )
}
export default TodoApp
