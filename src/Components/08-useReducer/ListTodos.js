import React from 'react';
import TodoItem from './TodoItem';

export const ListTodos = ({todos, handleToggle, deleteAction}) => {

  return (
    <>{ 
      todos.length > 0 ?
      todos.map((todo) => (
        
        <div key={ todo.id }
        onClick={ () => { handleToggle(todo.id) } } 
        className={ todo.done === true ? ' completed-bg cursor-pointer group block w-full bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 p-2 transition-all ': ' cursor-pointer group block w-full bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 p-2 transition-all '}>

          <div 
          className={ todo.done === true ? ' completed flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200': 'flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200'}>

            <TodoItem todo={ todo } deleteAction= { deleteAction } />
           
          </div>
      </div>           
      )):
      <div className='px-2 font-semibold text-slate-400'>
        <span>There is no task to load, try add some below!</span>
      </div>
    }
    </>
  )
}

