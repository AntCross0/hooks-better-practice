import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoForm = ({ handleAddTodo }) => {

    const [{title,desc}, handleInputChange, reset] = useForm({
        title: '',
        desc: '',
      }
      );

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = { 
            id: new Date().getTime(),
            title: title,
            desc: desc,
            done: false
          }    

        handleAddTodo(newTodo);
        reset();

    }

  return (
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
  )
}

export default TodoForm
