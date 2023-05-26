import React from 'react'
import { Link } from 'react-router-dom'

const Error404Page = () => {
    return (

        <div className='transition-all delay-200 relative flex flex-col gap-2 bg-white rounded w-2/4 h-4/5 my-4 mx-auto p-4 text-slate-700'>
            < div className='relative bg-slate-200 w-full rounded h-1/4 ' >
                <img className='mx-auto object-center rounded' height='280px' width='280px'></img>
            </div >
            <h2 className='font-bold text-2xl uppercase'>OOPS... looks like this page doesn't exit</h2>
            <h4 className='font-semibold text-xl'>Instead, you could be redirect to our Home page</h4>
            <div className='flex flex-row justify-end'>
                <Link className='bg-sky-400 text-white font-semibold p-2 rounded text-center w-32 justify-items-end '
                    exact to='/'>Home</Link>
            </div>
        </div >

    )
}

export default Error404Page
