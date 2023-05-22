import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import '../../index.css';

const initialState = [{
    id: new Date().getTime(),
    title: 'Aprender React',
    desc: 'quiero aprender react para mañana.',
    done: false,
},

];

const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
          id: new Date().getTime(),
          title: 'Aprender Node',
          desc: 'quiero aprender node Para despues',
          done: false
        }
    
        const action = {
          type: 'add',
          payload: newTodo
        }

        dispatch(action);
    }

    console.log(todos);

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
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>

                </button>

              </div>
          </a>
            
          ))
        }

        <div className='bottom-0 sticky p-1 pt-3 bg-white border-t-2 my-2 flex justify-between'>
          <form className='space-x-2'>
            <input required={true} placeholder='Write the title...' className=' rounded border-2 p-2 w-2/5' type='text'></input>
            <input placeholder='Write the description...' className=' rounded border-2 p-2 w-2/4' type='text'></input>
          </form>
          <button onClick={handleSubmit} className='bg-green-400 text-white font-bold p-2 rounded hover:bg-green-500 w-32' type='submit'>Add</button>
        </div>
      </div>
  </>
  )
}

export default TodoApp