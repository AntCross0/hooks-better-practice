import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        password: ''


    });

    const {nombre, email, password} = formValues;



    useEffect(() => {
        console.log('FormState Cambio!')
    },[]);



  return (
    <form>
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

        <input 
            onChange={ handleInputChange }
            autoComplete='off'
            name='password'
            type='Password'
            value={ password }
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        "/>
      
    </form>
  )
}

