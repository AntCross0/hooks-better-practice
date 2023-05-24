import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import '../../index.css';
import { useForm } from '../../hooks/useForm';

const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init);

    const [{title,desc}, handleInputChange, reset] = useForm({
      title: '',
      desc: '',
    }
    );

    useEffect( () => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    },[todos]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = { 
          id: new Date().getTime(),
          title: title,
          desc: desc,
          done: false
        }
    
        const action = {
          type: 'add',
          payload: newTodo
        }

        dispatch(action);
        reset();
    }
    const handleToggle = (todoId) => {

       const action = {
        type: 'toggle',
        payload: todoId
      }


      dispatch(action);
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
        
        { 
          todos.length > 0 ?
          todos.map((todo) => (
            
            <div key={ todo.id }
             onClick={ () => { handleToggle(todo.id) } } 
             className={ todo.done === true ? ' completed-bg cursor-pointer group block w-full bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 p-2 transition-all ': ' cursor-pointer group block w-full bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 p-2 transition-all '}>

              <div 
              className={ todo.done === true ? ' completed flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200': 'flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200'}>

                <div className='properties'>
                  <h3 className=' text-md font-bold text-slate-900 
                  transition-all ease-in-out duration-300  delay-75
                  group-hover:translate-x-2 group-hover:text-slate-500 '>{todo.title}</h3>

                  <p className=' text-sm text-semibold text-slate-500 
                  transition-all ease-in-out duration-300 group-hover:translate-x-2
                   group-hover:text-slate-400 '>{todo.desc}</p>
                </div>
                <button
                  onClick={()=>{ deleteAction(todo.id)}}
                  className=' my-auto bg-red-600 text-white rounded-full py-1 px-2 flex gap-2 font-medium justify-between items-center 
                  invisible transition-all
                  group-hover:transition-all group-hover:-translate-x-4 delay-100 group-hover:visible
                  overflow-x-hidden hover:bg-red-500' 
                  >Delete
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
                  className="w-5 h-5 delay-150 opacity-0 translate-x-6 transition-all group-hover:-translate-x-0 group-hover:opacity-100">
                  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
          </div>           
          )):
          <div className='px-2 font-semibold text-slate-400'>
            <span>There is no task add to load, try add some below!</span>
          </div>
        }

        <div className='sticky bottom-0 w-full p-2 bg-white border-t-2 mt-2'>

          <form onSubmit={handleSubmit}  className='flex flex-col md:flex-row gap-2'>

            <input required={true} placeholder='Write the title...' 
            name='title'
            onChange={handleInputChange}
            value={title}
            className='w-full md:w-2/6 transition-all ease-linear focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded border-2 p-2 
          ' type='text'></input>

            <input placeholder='Write the description...'
            name='desc'
            onChange={handleInputChange}
            value={desc}
            className='w-full md:w-2/4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded border-2 p-2 ' type='text'></input>

            <button className='w-full md:w-32 my-auto right-0 bg-green-400 text-white font-bold py-2 px-auto rounded hover:bg-green-500 ' type='submit'>Add</button>

          </form>
        </div>
      </div>
  </>
  )
}

export default TodoApp