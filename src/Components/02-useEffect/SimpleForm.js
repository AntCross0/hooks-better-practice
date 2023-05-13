import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''

    });

    const {nombre, email } = formState;


    const handleInputChange = ({ target }) => {
        
        setFormState( ()=> {
            return {
                ...formState,
                [ target.name ]: target.value

            }

        })
    }

    useEffect(() => {
        console.log('FormState Cambio!')
    },[]);



  return (
    <div>
        <h1 className='font-bold text-4xl m-3'>UseEffect</h1>
        <hr/>
        <input 
            onChange={ handleInputChange }
            autoComplete='off'
            name='nombre'
            type="text" 
            value={ nombre }
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>

        <input 
            onChange={ handleInputChange }
            autoComplete='off'
            name='email'
            type="text" 
            value={ email }
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>


        {
         (nombre === '123') && <Message />
        }
      
    </div>
  )
}

