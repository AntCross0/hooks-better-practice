import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import { useForm } from '../../hooks/useForm'

const LoginPage = () => {

    const [{ name, email }, handleInputChange, reset] = useForm({
        name: '',
        email: '',
    }
    );


    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({
            name,
            email
        });
    }

    return (
        <div>
            <form className='flex flex-col w-[48rem] h-96 mx-auto  gap-4 rounded bg-white my-[10%] text-black p-4'>
                <label className='font-bold text-4xl'>Login:</label>

                <input name='name' onChange={handleInputChange} className='transition-all transition-color delay-700 rounded p-2 ring-2 ring-pink-500  mx-auto focus:outline-none focus:ring-2 focus:ring-sky-400' placeholder='user' type='text'></input>

                <input name='email' onChange={handleInputChange} className='transition-all transition-color delay-700 rounded p-2 ring-2 ring-pink-500  mx-auto focus:outline-none focus:ring-2 focus:ring-sky-400' placeholder='mail...' type='text'></input>

                <Link to='/' onClick={handleClick} className='p-2 bg-sky-400 font-semibold text-white rounded text-center hover:bg-sky-500'>Login</Link>
            </form>
        </div>
    )
}

export default LoginPage
