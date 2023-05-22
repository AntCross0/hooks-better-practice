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

  return (
    <>



      <div className=' relative bg-slate-100 h-96 rounded max-w-[40%] mx-auto overflow-y-auto scroll-smooth'>
        <h1 className='text-4xl font-bold mx-2 my-2'>Todo App ({ todos.length })</h1>
        <hr className='my-3 mx-2' />
        

        { 
          todos.map((todo) => (
            <a key={ todo.id } href="#" className="group block w-full
             bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 p-2
             
               ">

              <div className=" flex justify-between space-x-3 rounded py-3 px-2 group-hover:bg-gray-200 ">

                <div>
                  <h3 className=" text-md font-bold text-slate-900 
                  transition-all ease-in-out duration-300  delay-75
                  group-hover:translate-x-2 group-hover:text-slate-500 ">{todo.title}</h3>

                  <p className=" text-sm text-semibold text-slate-500 
                  transition-all ease-in-out duration-300 group-hover:translate-x-2
                   group-hover:text-slate-400 ">{todo.desc}</p>
                </div>

                <button className=' my-auto bg-gray-400 text-white rounded-full py-1 px-2 flex gap-2 font-medium justify-between items-center 
                invisible
                group-hover:transition-all group-hover:-translate-x-4 delay-100 group-hover:visible
                overflow-x-hidden hover:bg-gray-500 after:bg-green-400' 
                >Completar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
                className="w-5 h-5 delay-150 opacity-0 translate-x-6 transition-all group-hover:-translate-x-0 group-hover:opacity-100">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>


                </button>

              </div>
          </a>
            
          ))
        }

        <div className='bottom-0 sticky p-2 bg-white border-t-2 my-2 flex flex-row gap-2 justify-item-stretch'>

          <form onSubmit={handleSubmit}  className='space-x-2'>

            <input required={true} placeholder='Write the title...' 
            name='title'
            onChange={handleInputChange}
            value={title}
            className='flex-1 transition-all ease-linear focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 rounded border-2 p-2 w-2/6' type='text'></input>

            <input placeholder='Write the description...'
            name='desc'
            onChange={handleInputChange}
            value={desc}
            className='flex-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded border-2 p-2 w-2/4' type='text'></input>

              <button className=' my-auto flex-none justify-self-end right-0 bg-green-400 text-white font-bold p-2 rounded hover:bg-green-500 w-16' type='submit'>Add</button>
          </form>
        </div>
      </div>
  </>
  )
}

export default TodoApp